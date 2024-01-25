import { PostReplyCommentService } from './post-reply-comment.service';
import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';
export declare class PostReplyCommentController {
    private readonly postReplyCommentService;
    constructor(postReplyCommentService: PostReplyCommentService);
    create(createPostReplyCommentDto: CreatePostReplyCommentDto, req: any): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        commentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostReplyCommentDto: UpdatePostReplyCommentDto): import(".prisma/client").Prisma.Prisma__PostReplyCommentClient<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        commentId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Promise<string>;
}
