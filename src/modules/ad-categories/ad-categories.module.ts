import { Module } from '@nestjs/common';
import { AdCategoriesService } from './ad-categories.service';
import { AdCategoriesController } from './ad-categories.controller';

@Module({
  controllers: [AdCategoriesController],
  providers: [AdCategoriesService],
})
export class AdCategoriesModule {}
