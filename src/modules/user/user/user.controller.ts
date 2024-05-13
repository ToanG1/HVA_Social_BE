import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../userDTO/createUser.dto';
import { UpdateUserDto } from '../userDTO/updateUser.dto';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  searchUsersByName(@Query('name') name: string, @Request() req: any) {
    return this.userService.searchUsersByName(name, req.user.sub);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createNewUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  getUser(@Param('id') userId: string, @Request() req: any) {
    if (userId === 'me') return this.userService.getUser(req.user.sub);
    else return this.userService.getUser(userId);
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
