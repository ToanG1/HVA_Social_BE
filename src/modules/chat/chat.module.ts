import { Module } from '@nestjs/common';
import { ChatService } from './user/chat.service';
import { ChatGateway } from './user/chat.gateway';
import { PrismaService } from '../prisma/prisma.service';
import { ChatController } from './user/chat.controller';
import { ChatAiApiService } from '../ai-api/chat/chat-ai-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [ChatGateway, ChatService, PrismaService, ChatAiApiService],
  controllers: [ChatController],
  imports: [HttpModule],
})
export class ChatModule {}
