import { Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FriendshipsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createFriendshipDto: CreateFriendshipDto) {
    const creatFollow = this.prismaService.follow.create({
      data: {
        followerId: createFriendshipDto.followerId,
      },
    });
    return creatFollow;
  }
  search(searchString: string) {
    return this.prismaService.chats.findMany({
      where: {
        follower: {
          contains: searchString,
          mode: 'insensitive',
        },
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
  }
  async remove(id: string) {
    const deleteFollow = this.prismaService.follow.delete({
      where: {
        id: String(id),
      },
    });
    await this.prismaService.$transaction([deleteFollow]);
    return 'success';
  }

  findAll() {
    return `This action returns all friendships`;
  }

  findOne(name: string) {}

  update(id: number, updateFriendshipDto: UpdateFriendshipDto) {
    return `This action updates a #${id} friendship`;
  }
}
