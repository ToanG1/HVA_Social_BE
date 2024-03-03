import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from '../prisma/prisma.service';
import { ChatAiApiService } from './chat/chat-ai-api.service';
import { DocumentController } from './user/document.controller';
import { DocumentAiApiService } from './user/document-ai-api.service';

@Module({
  controllers: [DocumentController],
  imports: [HttpModule],
  providers: [PrismaService, ChatAiApiService, DocumentAiApiService],
})
export class AiApiModule {}
