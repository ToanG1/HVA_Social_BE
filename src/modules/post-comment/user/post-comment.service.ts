import { Injectable, Param } from '@nestjs/common';
import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PostCommentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createPostCommentDto: CreatePostCommentDto, userId: string) {
    const commentpost = this.prismaService.post.create({
      data: {
        content: createPostCommentDto.content,
        userId: userId,
        videos: createPostCommentDto.video,
        images: createPostCommentDto.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return commentpost;
  }
  async getCommentPost(userId: string) {
    return this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        userInfo: true,
      },
    });
  }

  findAll() {
    return `This action returns all postComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postComment`;
  }

  async update(
    @Param('id') id: string,
    updatePostCommentDto: UpdatePostCommentDto,
  ) {
    const commentpost = this.prismaService.post.update({
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
