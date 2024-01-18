import { AdCategoriesService } from './ad-categories.service';
import { CreateAdCategoryDto } from './dto/create-ad-category.dto';
import { UpdateAdCategoryDto } from './dto/update-ad-category.dto';
export declare class AdCategoriesController {
    private readonly adCategoriesService;
    constructor(adCategoriesService: AdCategoriesService);
    create(createAdCategoryDto: CreateAdCategoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAdCategoryDto: UpdateAdCategoryDto): string;
    remove(id: string): string;
}
