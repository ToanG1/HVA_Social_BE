import { CreatePostCommentDto } from '../dto/create-post-comment.dto';
import { UpdatePostCommentDto } from '../dto/update-post-comment.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
export declare class PostCommentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createPostCommentDto: CreatePostCommentDto, userId: string): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getCommentPost(userId: string): Promise<{
        userInfo: {
            id: string;
            userId: string;
            avatar: string;
            about: string;
            createdAt: Date;
            updatedAt: Date;
        };
        name: string;
        email: string;
        isAdmin: boolean;
        id: string;
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        user: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        content: string;
        image: string;
        video: string;
        userId: string;
        postId: string;
        postReplyId: number;
        createdAt: Date;
        updatedAt: Date;
        postReply: string;
    }>;
    update(id: string, updatePostCommentDto: UpdatePostCommentDto): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(Id: string): Promise<string>;
}
