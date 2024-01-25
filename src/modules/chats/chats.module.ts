import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { UserService } from '../user/user.service';
import { FriendshipsService } from '../friendships/friendships.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ChatsController],
  providers: [ChatsService, UserService, FriendshipsService, PrismaService],
})
export class ChatsModule {}
