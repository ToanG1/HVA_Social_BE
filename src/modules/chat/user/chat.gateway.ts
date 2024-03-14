import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import { TypingDto } from '../dto/typing.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @UseGuards(AuthGuard)
  @SubscribeMessage('sendMessage')
  async create(@MessageBody() createChatDto: CreateChatDto) {
    this.server
      .to(createChatDto.chatRoomId)
      .emit('message', await this.chatService.createChat(createChatDto));
  }

  @UseGuards(AuthGuard)
  @SubscribeMessage('typing')
  typing(@MessageBody() typingDto: TypingDto) {
    this.server.to(typingDto.chatRoomId).emit('typing', typingDto);
  }
}
