import { Injectable } from '@nestjs/common';
import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostReplyCommentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(
    createPostReplyCommentDto: CreatePostReplyCommentDto,
    userId: string,
    commentId: string,
  ) {
    const commentReplyPost = await this.prismaService.postReplyComment.create({
      data: {
        content: createPostReplyCommentDto.content,
        userId: userId,
        commentId: commentId,
        videos: createPostReplyCommentDto.video,
        images: createPostReplyCommentDto.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return commentReplyPost;
  }
  async getReplyCommentPost(replyComment: string) {
    return this.prismaService.postComment.findUnique({
      where: {
        id: replyComment,
      },
      select: {
        id: true,
        post: true,
        content: true,
        images: true,
        videos: true,
      },
    });
  }

  findAll() {
    return `This action returns all postReplyComment`;
  }

  findOne(id: string) {
    return `This action returns a #${id} postReplyComment`;
  }

  update(id: string, updatePostReplyCommentDto: UpdatePostReplyCommentDto) {
    const replycommentpost = this.prismaService.postReplyComment.update({
      where: {
        id: id,
      },
      data: {
        content: updatePostReplyCommentDto.content || undefined,
        videos: updatePostReplyCommentDto.video,
        images: updatePostReplyCommentDto.image,
        updatedAt: new Date(),
      },
    });
    return replycommentpost;
  }

  async remove(id: string) {
    const deletecomment = this.prismaService.postReplyComment.deleteMany({
      where: {
        id: String(id),
      },
    });
    await this.prismaService.$transaction([deletecomment]);
    return 'success';
  }
}
