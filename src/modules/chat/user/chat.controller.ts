import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  Request,
  Param,
  Body,
  ForbiddenException,
  Delete,
  Query,
} from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { ChatService } from './chat.service';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { CreateChatRoomDto } from '../dto/create-chat-room.dto';
import { CreateChatUserDto } from '../dto/create-chat-user.dto';
import { ChatAiApiService } from 'src/modules/ai-api/chat/chat-ai-api.service';

@Controller('chat')
@UseGuards(AuthGuard)
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly chatAiApiService: ChatAiApiService,
  ) {}

  @Get('rooms')
  @UseInterceptors(PaginationInterceptor)
  findAllChatRooms(@Request() req: any) {
    return this.chatService.findAllChatRooms(req.user.id);
  }

  @Get('rooms/:id')
  @UseInterceptors(PaginationInterceptor)
  async findAllMessagesInChatRoom(
    @Param('id') chatRoomId: string,
    @Request() req: any,
  ) {
    if (
      await !this.chatService.isUserBelongToChatRoom(req.user.id, chatRoomId)
    ) {
      throw new ForbiddenException('You are not a member of this chat room');
    }
    return this.chatService.findAllMessagesInChatRoom(chatRoomId);
  }

  @Post('room')
  async createChatRoom(
    @Body() createChatRoomDto: CreateChatRoomDto,
    @Request() req: any,
    @Query('userId') userId: string,
  ) {
    const room = await this.chatService.findOne(req.user.sub, userId);
    if (!room) {
      const newRoom = await this.chatService.createChatRoom(
        req.user.sub,
        createChatRoomDto,
      );
      await this.chatService.createChatUser(
        new CreateChatUserDto(newRoom.id, req.user.sub),
      );
      await this.chatService.createChatUser(
        new CreateChatUserDto(newRoom.id, userId),
      );
    }

    return room != null
      ? room
      : await this.chatService.findOne(req.user.sub, userId);
  }

  @Post('user')
  async createChatUser(
    @Body() createChatUserDto: CreateChatUserDto,
    @Request() req: any,
  ) {
    if (
      await !this.chatService.isUserBelongToChatRoom(
        req.user.sub,
        createChatUserDto.chatRoomId,
      )
    ) {
      throw new ForbiddenException();
    }
    return this.chatService.createChatUser(createChatUserDto);
  }

  @Delete(':roomId/user')
  async deleteChatUser(
    @Param('roomId') chatRoomId: string,
    @Query('userId') userId: string,
    @Request() req: any,
  ) {
    if (
      !(await this.chatService.isUserBelongToChatRoom(req.user.sub, chatRoomId))
    ) {
      throw new ForbiddenException();
    }
    if (
      !(await this.chatService.isUserChatRoomOwner(req.user.sub, chatRoomId)) || //owner kick user out of the chat room
      userId !== req.user.sub // user leaves the chat room by himself
    ) {
      throw new ForbiddenException();
    }
    return await this.chatService.deleteChatUser(chatRoomId, userId);
  }

  @Delete(':roomId')
  async deleteChatRoom(
    @Param('roomId') chatRoomId: string,
    @Request() req: any,
  ) {
    if (
      !(await this.chatService.isUserChatRoomOwner(req.user.sub, chatRoomId))
    ) {
      throw new ForbiddenException();
    }
    return await this.chatService.deleteChatRoom(chatRoomId);
  }

  @Get('chatWithAI')
  chatWithAI() {
    return this.chatAiApiService.initChat();
  }
}
