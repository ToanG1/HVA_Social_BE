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
    findAll(): Promise<({
        user: {
            name: string;
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
    search(content: string): Promise<({
        user: {
            name: string;
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
            name: string;
            id: string;
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
