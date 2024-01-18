import { Module } from '@nestjs/common';
import { PostReplyCommentService } from './post-reply-comment.service';
import { PostReplyCommentController } from './post-reply-comment.controller';

@Module({
  controllers: [PostReplyCommentController],
  providers: [PostReplyCommentService],
})
export class PostReplyCommentModule {}
