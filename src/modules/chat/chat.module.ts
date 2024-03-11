import { Module } from '@nestjs/common';
import { ChatService } from './user/chat.service';
import { ChatGateway } from './user/chat.gateway';
import { PrismaService } from '../prisma/prisma.service';
import { ChatController } from './user/chat.controller';

@Module({
  providers: [ChatGateway, ChatService, PrismaService],
  controllers: [ChatController],
})
export class ChatModule {}
