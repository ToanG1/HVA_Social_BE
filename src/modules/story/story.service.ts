import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoryService {
  constructor(private readonly prismaService: PrismaService) {}

  create(image: string, userId: string) {
    return this.prismaService.story.create({
      data: {
        image,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    const friendIdList = await this.prismaService.follow.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followedId: true,
      },
    });

    //add current user to get current user story
    friendIdList.unshift({
      followedId: userId,
    });

    return this.prismaService.story.findMany({
      where: {
        userId: {
          in: friendIdList.map((user) => user.followedId),
        },
        createdAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      },
      include: {
        user: {
          select: {
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

  async remove(id: string, userId: any) {
    await this.prismaService.story.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
    return true;
  }
}
