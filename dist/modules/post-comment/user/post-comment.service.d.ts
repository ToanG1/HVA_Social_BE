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
        postId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: string): Promise<{
        userId: string;
    }>;
    getCommentPost(postId: string): Promise<{
        user: {
            userInfo: {
                avatar: string;
            };
            name: string;
        };
        id: string;
        content: string;
        images: string[];
        videos: string[];
    }[]>;
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
    remove(id: string): Promise<string>;
}
