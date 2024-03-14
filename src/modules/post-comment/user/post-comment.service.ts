import { Injectable, Param } from '@nestjs/common';
import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PostCommentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createPostCommentDto: CreatePostCommentDto, userId: string) {
    return await this.prismaService.postComment.create({
      data: {
        content: createPostCommentDto.content,
        userId: userId,
        postId: createPostCommentDto.postId,
        videos: createPostCommentDto.videos,
        images: createPostCommentDto.images,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.postComment.findUnique({
      where: {
        id,
      },
      select: {
        userId: true,
      },
    });
  }

  async getCommentPost(postId: string) {
    return await this.prismaService.postComment.findMany({
      where: {
        postId: postId,
      },
      select: {
        id: true,
        content: true,
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
        images: true,
        videos: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(
    @Param('id') id: string,
    updatePostCommentDto: UpdatePostCommentDto,
  ) {
    return await this.prismaService.postComment.update({
      where: {
        id,
      },
      data: {
        content: updatePostCommentDto.content || undefined,
        videos: updatePostCommentDto.videos || undefined,
        images: updatePostCommentDto.images || undefined,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: string) {
    await this.prismaService.postComment.delete({
      where: {
        id,
      },
    });
    return 'success';
  }
}
