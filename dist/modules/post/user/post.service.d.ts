import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Post } from '@prisma/client';
export declare class PostService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createPostDto: CreatePostDto, userId: string): Promise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getPost(userId: string): Promise<{
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
    updatePost(id: string, updatePost: UpdatePostDto): Promise<void>;
    findUserById(id: string): Promise<Post | null | undefined>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
        comments: {
            id: string;
            content: string;
            images: string[];
            videos: string[];
            userId: string;
            postId: string;
            createdAt: Date;
            updatedAt: Date;
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
    get(userId: string): Promise<{
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
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
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
    search(searchString: string): import(".prisma/client").Prisma.PrismaPromise<({
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
}
