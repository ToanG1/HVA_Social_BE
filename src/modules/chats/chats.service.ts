import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChatsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createChatDto: CreateChatDto, userId: string, flower: string) {
    const creatChat = this.prismaService.chats.create({
      data: {
        userId: userId,
        follower: flower,
        creator: createChatDto.creator,
        recipient: createChatDto.recipient,
        messages: createChatDto.messages,
      },
    });
    return creatChat;
  }

  findAll() {
    return this.prismaService.chats.findMany({
      where: {
        isActivated: true,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(flower: string) {
    const q = await this.prismaService.chats.findUnique({
      where: {
        id: flower,
      },
      include: {
        user: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });
    return q;
  }
  search(searchString: string) {
    return this.prismaService.chats.findMany({
      where: {
        messages: {
          contains: searchString,
          mode: 'insensitive',
        },
      },
      include: {
        user: {
          select: {
            name: true,
            follow: true,
          },
        },
      },
    });
  }

  async getPost(userId: string) {
    return this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        chats: true,
        isAdmin: true,
      },
    });
  }

  async updateChat(id: string, updateChatDto: UpdateChatDto) {
    const updateChat = this.prismaService.chats.update({
      where: {
        id: id,
      },
      data: {
        statusMessage: updateChatDto.statusMessage,
        updatedAt: new Date(),
      },
    });
    return updateChat;
  }

  async remove(id: string) {
    const deleteChats = this.prismaService.chats.delete({
      where: {
        id: String(id),
      },
    });
    await this.prismaService.$transaction([deleteChats]);
    return 'success';
  }
}
