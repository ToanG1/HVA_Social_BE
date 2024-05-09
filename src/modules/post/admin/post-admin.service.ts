import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PostAdminService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    const allPost = await this.prismaService.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        comments: {
          select: {
            id: true,
          },
        },
        reacts: {
          select: {
            id: true,
          },
        },
        saved: {
          select: {
            id: true,
          },
        },
      },
    });

    return allPost.map((post) => {
      return {
        ...post,
        comments: post.comments.length,
        reacts: post.reacts.length,
        saved: post.saved.length,
      };
    });
  }

  delete(postId: string) {
    return this.prismaService.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
