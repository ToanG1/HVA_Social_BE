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

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  async create(@MessageBody() createChatDto: CreateChatDto) {
    this.server
      .to(createChatDto.chatRoomId)
      .emit('message', await this.chatService.createChat(createChatDto));
  }

  @SubscribeMessage('typing')
  typing(@MessageBody() typingDto: TypingDto) {
    this.server.to(typingDto.chatRoomId).emit('typing', typingDto);
  }
}
