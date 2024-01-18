import { Test, TestingModule } from '@nestjs/testing';
import { AdCategoriesController } from './ad-categories.controller';
import { AdCategoriesService } from './ad-categories.service';

describe('AdCategoriesController', () => {
  let controller: AdCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdCategoriesController],
      providers: [AdCategoriesService],
    }).compile();

    controller = module.get<AdCategoriesController>(AdCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
