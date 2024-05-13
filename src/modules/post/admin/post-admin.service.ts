import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UpdatePostDto } from '../dto/update-post.dto';

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

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.update({
      where: {
        id: id,
      },
      data: {
        content: updatePostDto.content || undefined,
        videos: updatePostDto.videos || undefined,
        images: updatePostDto.images || undefined,
        updatedAt: new Date(),
      },
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
