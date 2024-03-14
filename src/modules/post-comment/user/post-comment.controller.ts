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
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostCommentService } from './post-comment.service';
import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('post-comment')
@UseGuards(AuthGuard)
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
    );
  }

  @Get(':id')
  @UseInterceptors(PaginationInterceptor)
  findCommentsOfPost(@Param('id') id: string) {
    return this.postCommentService.getCommentPost(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostCommentDto: UpdatePostCommentDto,
    @Request() req: any,
  ) {
    const commentpost = await this.postCommentService.findOne(id);

    if (!commentpost) throw new ForbiddenException();

    if (commentpost.userId !== req.user.sub) {
      throw new ForbiddenException();
    }
    return this.postCommentService.update(id, updatePostCommentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any) {
    const commentpost = await this.postCommentService.findOne(id);

    if (!commentpost) throw new ForbiddenException();

    if (commentpost.userId !== req.user.sub) {
      throw new ForbiddenException();
    }
    return this.postCommentService.remove(id);
  }
}
