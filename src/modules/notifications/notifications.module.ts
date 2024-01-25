import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { UserService } from '../user/user.service';
import { PostCommentService } from '../post-comment/user/post-comment.service';
import { PostService } from '../post/user/post.service';
import { PostReplyCommentService } from '../post-reply-comment/post-reply-comment.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [NotificationsController],
  providers: [
    NotificationsService,
    UserService,
    PostCommentService,
    PostService,
    PostReplyCommentService,
    PrismaService,
  ],
})
export class NotificationsModule {}
