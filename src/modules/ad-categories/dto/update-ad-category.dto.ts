import { PartialType } from '@nestjs/mapped-types';
import { CreateAdCategoryDto } from './create-ad-category.dto';

export class UpdateAdCategoryDto extends PartialType(CreateAdCategoryDto) {}
