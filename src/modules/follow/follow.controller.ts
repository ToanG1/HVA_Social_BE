import {
  Controller,
  Get,
  Post,
  Request,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FollowService } from './follow.service';
import { AuthGuard } from 'src/guard/auth.guard';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';

@Controller('follow')
@UseGuards(AuthGuard)
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post()
  create(@Query('userId') userId: string, @Request() req: any) {
    return this.followService.create(req.user.sub, userId);
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAllCurrentUser(@Request() req: any) {
    return this.followService.findAllOfUser(req.user.sub);
  }

  @Get(':userId')
  @UseInterceptors(PaginationInterceptor)
  findAllOfUser(@Param('userId') userId: string) {
    return this.followService.findAllOfUser(userId);
  }
}
