import {
  Controller,
  Delete,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostAdminService } from './post-admin.service';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { AdminAuthGuard } from 'src/guard/adminAuth.guard';

@Controller('admin/post')
@UseGuards(AdminAuthGuard)
export class PostAdminController {
  constructor(private readonly postAdminService: PostAdminService) {}

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll() {
    return this.postAdminService.findAll();
  }

  @Delete(':id')
  delete(id: string) {
    return this.postAdminService.delete(id);
  }
}
