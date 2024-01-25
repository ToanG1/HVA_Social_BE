import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Request,
  Param,
  Delete,
  ForbiddenException,
} from '@nestjs/common';
import { PostCommentService } from './post-comment.service';
import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('post-comment')
export class PostCommentController {
  constructor(private readonly postCommentService: PostCommentService) {}

  @Post()
  async create(
    @Body() createPostCommentDto: CreatePostCommentDto,
    @Request() req: any,
  ) {
    return await this.postCommentService.create(
      createPostCommentDto,
      req.user.sub,
      req.post.sub,
    );
  }

  @Get()
  findAll() {
    return this.postCommentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postCommentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostCommentDto: UpdatePostCommentDto,
    @Request() req: any,
  ) {
    const post = await this.postCommentService.findOne(id);
    if (post.user.id !== req.user.sub) {
      throw new ForbiddenException();
    }
    return this.postCommentService.update(id, updatePostCommentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any) {
    const commentpost = await this.postCommentService.findOne(id);
    if (commentpost.user.id !== req.user.sub) {
      throw new ForbiddenException();
    }
    return this.postCommentService.remove(id);
  }
}
