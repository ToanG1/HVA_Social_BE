import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { PostCommentModule } from './modules/post-comment/post-comment.module';
import { PostReplyCommentModule } from './modules/post-reply-comment/post-reply-comment.module';
import { FriendshipsModule } from './modules/friendships/friendships.module';
import { GroupsModule } from './modules/groups/groups.module';
import { ChatsModule } from './modules/chats/chats.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AdManagementModule } from './modules/ad-management/ad-management.module';
import { AdCategoriesModule } from './modules/ad-categories/ad-categories.module';
import { LogsModule } from './modules/logs/logs.module';
import { MailSenderModule } from './modules/mail-sender/mail-sender.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    PostCommentModule,
    PostReplyCommentModule,
    FriendshipsModule,
    GroupsModule,
    ChatsModule,
    NotificationsModule,
    AdManagementModule,
    AdCategoriesModule,
    LogsModule,
    MailSenderModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
