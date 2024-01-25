import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
export declare class PostCommentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createPostCommentDto: CreatePostCommentDto, userId: string, postId: string): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getCommentPost(postId: string): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        user: {
            post: {
                id: string;
                content: string;
                images: string[];
                videos: string[];
                userId: string;
                isActivated: boolean;
                createdAt: Date;
                updatedAt: Date;
            }[];
            name: string;
            id: string;
        };
    } & {
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updatePostCommentDto: UpdatePostCommentDto): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(Id: string): Promise<string>;
}
