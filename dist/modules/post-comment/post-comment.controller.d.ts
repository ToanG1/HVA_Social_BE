import { PostCommentService } from './post-comment.service';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { UpdatePostCommentDto } from './dto/update-post-comment.dto';
export declare class PostCommentController {
    private readonly postCommentService;
    constructor(postCommentService: PostCommentService);
    create(createPostCommentDto: CreatePostCommentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostCommentDto: UpdatePostCommentDto): string;
    remove(id: string): string;
}
