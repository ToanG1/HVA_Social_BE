import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostReplyCommentService } from './post-reply-comment.service';
import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';

@Controller('post-reply-comment')
export class PostReplyCommentController {
  constructor(private readonly postReplyCommentService: PostReplyCommentService) {}

  @Post()
  create(@Body() createPostReplyCommentDto: CreatePostReplyCommentDto) {
    return this.postReplyCommentService.create(createPostReplyCommentDto);
  }

  @Get()
  findAll() {
    return this.postReplyCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postReplyCommentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostReplyCommentDto: UpdatePostReplyCommentDto) {
    return this.postReplyCommentService.update(+id, updatePostReplyCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postReplyCommentService.remove(+id);
  }
}
