import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdCategoriesService } from './ad-categories.service';
import { CreateAdCategoryDto } from './dto/create-ad-category.dto';
import { UpdateAdCategoryDto } from './dto/update-ad-category.dto';

@Controller('ad-categories')
export class AdCategoriesController {
  constructor(private readonly adCategoriesService: AdCategoriesService) {}

  @Post()
  create(@Body() createAdCategoryDto: CreateAdCategoryDto) {
    return this.adCategoriesService.create(createAdCategoryDto);
  }

  @Get()
  findAll() {
    return this.adCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdCategoryDto: UpdateAdCategoryDto) {
    return this.adCategoriesService.update(+id, updateAdCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adCategoriesService.remove(+id);
  }
}
