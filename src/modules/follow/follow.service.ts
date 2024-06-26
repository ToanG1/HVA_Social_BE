import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class FollowService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(followerId: string, followedId: string) {
    const existed = await this.prismaService.follow.findUnique({
      where: {
        followerId_followedId: {
          followerId,
          followedId,
        },
      },
    });

    if (existed) {
      return this.remove(existed.id);
    }

    return this.prismaService.follow.create({
      data: {
        followerId,
        followedId,
      },
    });
  }

  findAllOfUser(userId: string) {
    return this.prismaService.follow.findMany({
      where: {
        OR: [
          {
            followerId: userId,
          },
          {
            followedId: userId,
          },
        ],
      },
      select: {
        followed: {
          select: {
            id: true,
            name: true,
            userInfo: {
              select: {
                avatar: true,
              },
            },
          },
        },
        follower: {
          select: {
            id: true,
            name: true,
            userInfo: {
              select: {
                avatar: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  remove(id: string) {
    return this.prismaService.follow.delete({
      where: {
        id,
      },
    });
  }
}
