import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Query,
  Delete,
} from '@nestjs/common';
import { StoryService } from './story.service';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('story')
@UseGuards(AuthGuard)
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  create(@Query('image') image: string, @Request() req: any) {
    return this.storyService.create(image, req.user.sub);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.storyService.findAll(req.user.sub);
  }

  @Delete()
  remove(@Query('id') id: string, @Request() req: any) {
    return this.storyService.remove(id, req.user.sub);
  }
}
