import { Injectable } from '@nestjs/common';
import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';

@Injectable()
export class PostReplyCommentService {
  create(createPostReplyCommentDto: CreatePostReplyCommentDto) {
    return 'This action adds a new postReplyComment';
  }

  findAll() {
    return `This action returns all postReplyComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postReplyComment`;
  }

  update(id: number, updatePostReplyCommentDto: UpdatePostReplyCommentDto) {
    return `This action updates a #${id} postReplyComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} postReplyComment`;
  }
}
