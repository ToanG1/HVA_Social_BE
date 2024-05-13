import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostAdminService } from './post-admin.service';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { ChartFormattedPostDataInterceptor } from 'src/interceptors/chart-fomarted-post-data.interceptors';
import { AdminAuthGuard } from 'src/guard/adminAuth.guard';
import { UpdatePostDto } from '../dto/update-post.dto';

@Controller('admin/post')
@UseGuards(AdminAuthGuard)
export class PostAdminController {
  constructor(private readonly postAdminService: PostAdminService) {}

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll() {
    return this.postAdminService.findAll();
  }

  @Get('chart')
  @UseInterceptors(ChartFormattedPostDataInterceptor)
  getDataForChart() {
    return this.postAdminService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postAdminService.update(id, updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postAdminService.delete(id);
  }
}
