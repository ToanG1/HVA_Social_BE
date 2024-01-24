import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
  UseInterceptors,
  ForbiddenException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createPostDto: CreatePostDto, @Request() req: any) {
    return await this.postService.create(createPostDto, req.user.sub);
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  async findAll() {
    return await this.postService.findAll();
  }
  @Get('search')
  @UseInterceptors(PaginationInterceptor)
  async search(@Query('keyword') content: string) {
    return await this.postService.search(content);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Request() req: any,
  ) {
    const post = await this.postService.findOne(id);
    if (post.user.id !== req.user.sub) {
      throw new ForbiddenException();
    }
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string, @Request() req: any) {
    //Check if the user is the owner
    const post = await this.postService.findOne(id);
    if (post.user.id !== req.user.sub) {
      throw new ForbiddenException();
    }
    return this.postService.remove(id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
