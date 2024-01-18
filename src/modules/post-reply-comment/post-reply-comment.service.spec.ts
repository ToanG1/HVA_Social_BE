import { Test, TestingModule } from '@nestjs/testing';
import { PostReplyCommentService } from './post-reply-comment.service';

describe('PostReplyCommentService', () => {
  let service: PostReplyCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostReplyCommentService],
    }).compile();

    service = module.get<PostReplyCommentService>(PostReplyCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
