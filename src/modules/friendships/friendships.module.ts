import { Module } from '@nestjs/common';
import { FriendshipsService } from './friendships.service';
import { FriendshipsController } from './friendships.controller';
import { GroupsService } from '../groups/groups.service';
import { ChatsService } from '../chats/chats.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [FriendshipsController],
  providers: [FriendshipsService, GroupsService, ChatsService, PrismaService],
})
export class FriendshipsModule {}
