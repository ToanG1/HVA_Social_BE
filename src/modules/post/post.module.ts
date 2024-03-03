import { Module } from '@nestjs/common';
import { PostService } from './user/post.service';
import { PostController } from './user/post.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { MailSenderService } from '../mail-sender/mail-sender.service';
import { NSFWApiService } from '../ai-api/nsfw-content/nsfw-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [PostController],
  providers: [
    PostService,
    UserService,
    PrismaService,
    MailSenderService,
    NSFWApiService,
  ],
  imports: [HttpModule],
})
export class PostModule {}
