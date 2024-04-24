import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { ForbiddenException, Request } from '@nestjs/common';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import { TypingDto } from '../dto/typing.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { ChatAiApiService } from 'src/modules/ai-api/chat/chat-ai-api.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  constructor(
    private readonly chatService: ChatService,
    private readonly chatAiApiService: ChatAiApiService,
  ) {}

  @WebSocketServer()
  server: Server;

  @UseGuards(AuthGuard)
  @SubscribeMessage('sendMessage')
  async create(
    @MessageBody() createChatDto: CreateChatDto,
    @Request() req: any,
  ) {
    const chatUser = await this.chatService.findChatUserByUserId(
      createChatDto.chatRoomId,
      req.user.sub,
    );
    if (!chatUser) {
      throw new ForbiddenException('You are not a member of this chat room');
    }
    createChatDto.chatUserId = chatUser.id;
    this.server
      .to(createChatDto.chatRoomId)
      .emit('message', await this.chatService.createChat(createChatDto));
  }

  @UseGuards(AuthGuard)
  @SubscribeMessage('typing')
  typing(@MessageBody() typingDto: TypingDto, @Request() req: any) {
    if (
      !this.chatService.isUserBelongToChatRoom(
        req.user.sub,
        typingDto.chatRoomId,
      )
    ) {
      throw new ForbiddenException('You are not a member of this chat room');
    }
    this.server.to(typingDto.chatRoomId).emit('typing', typingDto);
  }

  @UseGuards(AuthGuard)
  @SubscribeMessage('chatWithAI')
  chatWithAI(@MessageBody() chatAiObj: any) {
    return this.chatAiApiService.chat(chatAiObj);
  }
}
