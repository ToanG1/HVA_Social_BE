import { Module } from '@nestjs/common';
import { PostReplyCommentService } from './post-reply-comment.service';
import { PostReplyCommentController } from './post-reply-comment.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { PostCommentService } from '../post-comment/user/post-comment.service';

@Module({
  controllers: [PostReplyCommentController],
  providers: [
    PostReplyCommentService,
    PrismaService,
    UserService,
    PostCommentService,
  ],
})
export class PostReplyCommentModule {}
