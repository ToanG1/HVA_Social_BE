import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Patch,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { UpdateUserDto } from '../userDTO/updateUser.dto';
import { AdminAuthGuard } from 'src/guard/adminAuth.guard';
import { ChartFormattedUserDataInterceptor } from 'src/interceptors/chart-fomarted-user-data.interceptors';
import { PaginationInterceptor } from 'src/interceptors/pagination.interceptors';
import { CreateUserDto } from '../userDTO/createUser.dto';

@UseGuards(AdminAuthGuard)
@Controller('admin/user')
export class UserAdminController {
  constructor(private userService: UserAdminService) {}

  @Get()
  @UseInterceptors(PaginationInterceptor)
  searchUsersByName() {
    return this.userService.findAll();
  }

  @Get('chart')
  @UseInterceptors(ChartFormattedUserDataInterceptor)
  getUser() {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  updateUser(@Param('id') userId: string, @Body() userUpdate: UpdateUserDto) {
    return this.userService.updateUser(userId, userUpdate);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) userId: string) {
    return this.userService.deleteUser(userId);
  }
}
