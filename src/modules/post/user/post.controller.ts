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
  NotAcceptableException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { AuthGuard } from 'src/guard/auth.guard';
import { NSFWApiService } from 'src/modules/ai-api/nsfw-content/nsfw-api.service';
import { FunctionCode } from 'src/utils/enums/function-code.enum';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly nsfwApiService: NSFWApiService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createPostDto: CreatePostDto, @Request() req: any) {
    const post = await this.postService.create(createPostDto, req.user.sub);

    if (await this.checkNSFWPost(post, req.user.sub)) {
      return post;
    }
    await this.postService.remove(post.id);
    throw new NotAcceptableException(
      'Your post violated our Community Standard for NSFW content',
    );
  }

  @Post('save')
  @UseGuards(AuthGuard)
  savePost(@Query('postId') postId: string, @Request() req: any) {
    this.postService.savePost(postId, req.user.sub);
  }

  @Get('save')
  @UseGuards(AuthGuard)
  @UseInterceptors(PaginationInterceptor)
  getPostSaved(@Request() req: any) {
    return this.postService.getPostSaved(req.user.sub);
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query('userId') userId: string) {
    if (userId) {
      return this.postService.findByUserId(userId);
    }
    return this.postService.findAll();
  }

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(PaginationInterceptor)
  async search(@Query('keyword') content: string) {
    return await this.postService.search(content);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Request() req: any,
  ) {
    const post = await this.postService.findOne(id);
    if (post.user.id !== req.user.sub) {
      throw new ForbiddenException();
    }

    const updatedPost = await this.postService.update(id, updatePostDto);

    if (await this.checkNSFWPost(updatedPost, req.user.sub)) {
      return updatedPost;
    }
    await this.postService.remove(updatedPost.id);
    throw new NotAcceptableException(
      'Your post violated our Community Standard for NSFW content',
    );
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

  async checkNSFWPost(post: any, userId: string) {
    if (!post) {
      return false;
    }
    if (post.content) {
      const resultText = await this.nsfwApiService.checkNSFWContent({
        content: post.content,
        priority: 'high',
        type: 'text',
        userId: userId,
        functionCode: FunctionCode.POST,
        idObject: post.id,
      });
      if (resultText.isBanned) {
        return false;
      }
    }
    if (post.images.length > 0) {
      for (const image of post.images) {
        const resultImage = await this.nsfwApiService.checkNSFWContent({
          content:
            'https://hva-bucket.s3.ap-southeast-1.amazonaws.com/' + image,
          priority: 'high',
          type: 'image',
          userId: userId,
          functionCode: FunctionCode.POST,
          idObject: post.id,
        });
        if (resultImage.isBanned) {
          return false;
        }
      }
    }
    return true;
  }
}
