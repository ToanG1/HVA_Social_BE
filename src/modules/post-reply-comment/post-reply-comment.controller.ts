import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { PostReplyCommentService } from './post-reply-comment.service';
import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';

@Controller('post-reply-comment')
export class PostReplyCommentController {
  constructor(
    private readonly postReplyCommentService: PostReplyCommentService,
  ) {}

  @Post()
  async create(
    @Body() createPostReplyCommentDto: CreatePostReplyCommentDto,
    @Request() req: any,
  ) {
    return await this.postReplyCommentService.create(
      createPostReplyCommentDto,
      req.user.sub,
      req.post.sub,
    );
  }

  @Get()
  findAll() {
    return this.postReplyCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postReplyCommentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostReplyCommentDto: UpdatePostReplyCommentDto,
  ) {
    return this.postReplyCommentService.update(id, updatePostReplyCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postReplyCommentService.remove(id);
  }
}
