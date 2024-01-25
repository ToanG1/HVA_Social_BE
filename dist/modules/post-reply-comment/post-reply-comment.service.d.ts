import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PostReplyCommentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createPostReplyCommentDto: CreatePostReplyCommentDto, userId: string, commentId: string): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        commentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getReplyCommentPost(replyComment: string): Promise<{
        post: {
            id: string;
            content: string;
            images: string[];
            videos: string[];
            userId: string;
            isActivated: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        id: string;
        content: string;
        images: string[];
        videos: string[];
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
