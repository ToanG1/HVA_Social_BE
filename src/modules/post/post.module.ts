import { Module } from '@nestjs/common';
import { PostService } from './user/post.service';
import { PostController } from './user/post.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { MailSenderService } from '../mail-sender/mail-sender.service';

@Module({
  controllers: [PostController],
  providers: [PostService, UserService, PrismaService, MailSenderService],
})
export class PostModule {}
