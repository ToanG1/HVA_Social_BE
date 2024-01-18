import { PostReplyCommentService } from './post-reply-comment.service';
import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';
export declare class PostReplyCommentController {
    private readonly postReplyCommentService;
    constructor(postReplyCommentService: PostReplyCommentService);
    create(createPostReplyCommentDto: CreatePostReplyCommentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostReplyCommentDto: UpdatePostReplyCommentDto): string;
    remove(id: string): string;
}
