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
        name: string;
        id: string;
        email: string;
        isAdmin: boolean;
        userInfo: {
            id: string;
            userId: string;
            avatar: string;
            about: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
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
        name: string;
        id: string;
        email: string;
        isAdmin: boolean;
        userInfo: {
            id: string;
            userId: string;
            avatar: string;
            about: string;
            createdAt: Date;
            updatedAt: Date;
        };
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
