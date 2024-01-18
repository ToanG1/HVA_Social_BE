import { Test, TestingModule } from '@nestjs/testing';
import { PostReplyCommentController } from './post-reply-comment.controller';
import { PostReplyCommentService } from './post-reply-comment.service';

describe('PostReplyCommentController', () => {
  let controller: PostReplyCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostReplyCommentController],
      providers: [PostReplyCommentService],
    }).compile();

    controller = module.get<PostReplyCommentController>(PostReplyCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
