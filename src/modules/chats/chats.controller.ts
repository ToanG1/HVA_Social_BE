import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { User } from '@prisma/client';

@Controller('api/chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createChats(
    @Body() createChatDto: CreateChatDto,
     @Request() req: any,
    ) {
   
  }

  @Get()
  findAll() {
    return this.chatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(+id, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatsService.remove(+id);
  }
}
