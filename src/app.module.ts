import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { PostCommentModule } from './modules/post-comment/post-comment.module';
import { PostReplyCommentModule } from './modules/post-reply-comment/post-reply-comment.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { LogsModule } from './modules/logs/logs.module';
import { MailSenderModule } from './modules/mail-sender/mail-sender.module';
import { AuthModule } from './modules/auth/auth.module';
import { AiApiModule } from './modules/ai-api/ai-api.module';
import { ChatModule } from './modules/chat/chat.module';
import { MinioClientModule } from './modules/minio-client/minio-client.module';
import { FollowModule } from './modules/follow/follow.module';
import { ReactModule } from './modules/react/react.module';
import { StoryModule } from './modules/story/story.module';
import { S3Module } from './modules/s3/s3.module';
@Module({
  imports: [
    UserModule,
    PostModule,
    PostCommentModule,
    PostReplyCommentModule,
    NotificationsModule,
    LogsModule,
    MailSenderModule,
    MinioClientModule,
    AuthModule,
    AiApiModule,
    ChatModule,
    FollowModule,
    ReactModule,
    StoryModule,
    S3Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
