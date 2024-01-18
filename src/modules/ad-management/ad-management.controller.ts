import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdManagementService } from './ad-management.service';
import { CreateAdManagementDto } from './dto/create-ad-management.dto';
import { UpdateAdManagementDto } from './dto/update-ad-management.dto';

@Controller('ad-management')
export class AdManagementController {
  constructor(private readonly adManagementService: AdManagementService) {}

  @Post()
  create(@Body() createAdManagementDto: CreateAdManagementDto) {
    return this.adManagementService.create(createAdManagementDto);
  }

  @Get()
  findAll() {
    return this.adManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdManagementDto: UpdateAdManagementDto) {
    return this.adManagementService.update(+id, updateAdManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adManagementService.remove(+id);
  }
}
