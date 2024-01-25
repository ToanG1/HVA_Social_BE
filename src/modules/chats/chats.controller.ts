import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { User } from '@prisma/client';

@Controller('api/chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createChats(@Body() createChatDto: CreateChatDto, @Request() req: any) {
    console.log('createChats');
    return await this.chatsService.create(
      createChatDto,
      req.user.sub,
      req.follower.sub,
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.chatsService.findAll();
  }
  @Get()
  @UseGuards(AuthGuard)
  searchUserMessage(@Param('id') id: string) {
    return this.chatsService.search(id);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.chatsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.updateChat(id, updateChatDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.chatsService.remove(id);
  }
}
