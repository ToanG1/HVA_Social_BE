import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReactService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(postId: string, userId: string) {
    const existed = await this.prismaService.postReact.findUnique({
      where: {
        postId_userId: {
          postId,
          userId,
        },
      },
    });
    if (existed) {
      await this.prismaService.postReact.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });
    } else {
      await this.prismaService.postReact.create({
        data: {
          postId,
          userId,
        },
      });
    }
  }
}
