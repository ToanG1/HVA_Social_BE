import { CreateAdCategoryDto } from './dto/create-ad-category.dto';
import { UpdateAdCategoryDto } from './dto/update-ad-category.dto';
export declare class AdCategoriesService {
    create(createAdCategoryDto: CreateAdCategoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAdCategoryDto: UpdateAdCategoryDto): string;
    remove(id: number): string;
}
