import { Injectable } from '@nestjs/common';
import { CreateAdCategoryDto } from './dto/create-ad-category.dto';
import { UpdateAdCategoryDto } from './dto/update-ad-category.dto';

@Injectable()
export class AdCategoriesService {
  create(createAdCategoryDto: CreateAdCategoryDto) {
    return 'This action adds a new adCategory';
  }

  findAll() {
    return `This action returns all adCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adCategory`;
  }

  update(id: number, updateAdCategoryDto: UpdateAdCategoryDto) {
    return `This action updates a #${id} adCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} adCategory`;
  }
}
