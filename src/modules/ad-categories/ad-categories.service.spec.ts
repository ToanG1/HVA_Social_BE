import { Test, TestingModule } from '@nestjs/testing';
import { AdCategoriesService } from './ad-categories.service';

describe('AdCategoriesService', () => {
  let service: AdCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdCategoriesService],
    }).compile();

    service = module.get<AdCategoriesService>(AdCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
