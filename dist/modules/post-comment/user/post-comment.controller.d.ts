import { PostCommentService } from './post-comment.service';
import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
export declare class PostCommentController {
    private readonly postCommentService;
    constructor(postCommentService: PostCommentService);
    create(createPostCommentDto: CreatePostCommentDto, req: any): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findCommentsOfPost(id: string): Promise<{
        user: {
            name: string;
            userInfo: {
                avatar: string;
            };
        };
        id: string;
        content: string;
        images: string[];
        videos: string[];
    }[]>;
    update(id: string, updatePostCommentDto: UpdatePostCommentDto, req: any): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string, req: any): Promise<string>;
}
