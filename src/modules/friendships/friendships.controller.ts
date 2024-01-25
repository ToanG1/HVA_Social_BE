import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FriendshipsService } from './friendships.service';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('friendships')
export class FriendshipsController {
  constructor(private readonly friendshipsService: FriendshipsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createFriendshipDto: CreateFriendshipDto) {
    return this.friendshipsService.create(createFriendshipDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  search(@Param('id') id: string) {
    return this.friendshipsService.search(id);
  }

  @Get()
  findAll() {
    return this.friendshipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.friendshipsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFriendshipDto: UpdateFriendshipDto,
  ) {
    return this.friendshipsService.update(+id, updateFriendshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.friendshipsService.remove(id);
  }
}
