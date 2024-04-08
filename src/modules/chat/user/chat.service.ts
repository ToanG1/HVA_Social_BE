import { Injectable } from '@nestjs/common';
import { CreateChatDto } from '../dto/create-chat.dto';
import { CreateChatRoomDto } from '../dto/create-chat-room.dto';
import { CreateChatUserDto } from '../dto/create-chat-user.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class ChatService {
  async deleteChatRoom(chatRoomId: string) {
    try {
      await this.prismaService.chatRoom.delete({
        where: {
          id: chatRoomId,
        },
      });
      return 'success';
    } catch (err) {
      throw err;
    }
  }
  async deleteChatUser(chatRoomId: string, userId: string) {
    try {
      await this.prismaService.chatUser.delete({
        where: {
          chatRoomId_userId: {
            chatRoomId: chatRoomId,
            userId: userId,
          },
        },
      });
      return 'success';
    } catch (err) {
      throw err;
    }
  }
  constructor(private readonly prismaService: PrismaService) {}

  async isUserBelongToChatRoom(userId: string, chatRoomId: string) {
    return (
      (await this.prismaService.chatUser.count({
        where: {
          userId: userId,
          chatRoomId: chatRoomId,
        },
      })) > 0
    );
  }

  async isUserChatRoomOwner(userId: string, chatRoomId: string) {
    return (
      (await this.prismaService.chatRoom.count({
        where: {
          id: chatRoomId,
          ownerId: userId,
        },
      })) > 0
    );
  }

  findAllChatRooms(userId: string) {
    return this.prismaService.chatRoom.findMany({
      where: {
        chatUsers: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        chatUsers: true,
      },
    });
  }

  findAllMessagesInChatRoom(chatRoomId: string) {
    return this.prismaService.chat.findMany({
      where: {
        chatRoomId: chatRoomId,
      },
    });
  }

  findOne() {
    return null;
  }

  createChatRoom(userId: string, createChatRoomDto: CreateChatRoomDto) {
    return this.prismaService.chatRoom.create({
      data: {
        name: createChatRoomDto.name,
        ownerId: userId,
        isPublic: createChatRoomDto.isPublic,
      },
    });
  }

  createChatUser(createChatUserDto: CreateChatUserDto) {
    return this.prismaService.chatUser.create({
      data: {
        chatRoomId: createChatUserDto.chatRoomId,
        userId: createChatUserDto.userId,
      },
    });
  }

  createChat(createChatDto: CreateChatDto) {
    return this.prismaService.chat.create({
      data: {
        chatRoomId: createChatDto.chatRoomId,
        chatUserId: createChatDto.chatUserId,
        content: createChatDto.content,
      },
    });
  }
}
