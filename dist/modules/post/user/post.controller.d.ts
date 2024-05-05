import { PostService } from './post.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { NSFWApiService } from 'src/modules/ai-api/nsfw-content/nsfw-api.service';
export declare class PostController {
    private readonly postService;
    private readonly nsfwApiService;
    constructor(postService: PostService, nsfwApiService: NSFWApiService);
    create(createPostDto: CreatePostDto, req: any): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    savePost(postId: string, req: any): void;
    getPostSaved(req: any): import(".prisma/client").Prisma.PrismaPromise<({
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
    } & {
        id: string;
        postId: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    search(content: string): Promise<({
        user: {
            name: string;
            userInfo: {
                avatar: string;
            };
        };
    } & {
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            name: string;
        };
        reacts: {
            user: {
                id: string;
                name: string;
                userInfo: {
                    avatar: string;
                };
            };
        }[];
    } & {
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updatePostDto: UpdatePostDto, req: any): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string, req: any): Promise<string>;
    checkNSFWPost(post: any, userId: string): Promise<any>;
}
