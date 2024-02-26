import { Injectable, Param } from '@nestjs/common';
import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PostCommentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createPostCommentDto: CreatePostCommentDto) {
    const commentpost = this.prismaService.postComment.create({
      data: {
        content: createPostCommentDto.content,
        userId: createPostCommentDto.userId,
        postId: createPostCommentDto.postId,
        videos: createPostCommentDto.video,
        images: createPostCommentDto.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return commentpost;
  }
  async getCommentPost(postId: string) {
    return this.prismaService.post.findUnique({
      where: {
        id: postId,
      },
      select: {
        id: true,
        content: true,
        images: true,
        videos: true,
      },
    });
  }

  findAll() {
    return `This action returns all postComment`;
  }

  async findOne(id: string) {
    const q = await this.prismaService.postComment.findUnique({
      where: {
        id: String(id),
      },
      include: {
        user: {
          select: {
            name: true,
            post: true,
            id: true,
          },
        },
      },
    });
    return q;
  }

  async update(
    @Param('id') id: string,
    updatePostCommentDto: UpdatePostCommentDto,
  ) {
    const commentpost = this.prismaService.postComment.update({
      where: {
        id: id,
      },
      data: {
        content: updatePostCommentDto.content || undefined,
        userId: id,
        videos: updatePostCommentDto.video,
        images: updatePostCommentDto.image,
        updatedAt: new Date(),
      },
    });
    return commentpost;
  }

  async remove(Id: string) {
    const deletecomment = this.prismaService.postComment.deleteMany({
      where: {
        id: String(Id),
      },
    });
    await this.prismaService.$transaction([deletecomment]);
    return 'success';
  }
}
