import { Module } from '@nestjs/common';
import { PostCommentService } from './user/post-comment.service';
import { PostCommentController } from './user/post-comment.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user/user.service';

@Module({
  controllers: [PostCommentController],
  providers: [PostCommentService, UserService, PrismaService],
})
export class PostCommentModule {}
