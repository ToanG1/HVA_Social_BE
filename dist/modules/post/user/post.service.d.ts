import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
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
    findByUserId(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        content: string;
        images: string[];
        videos: string[];
        userId: string;
        isActivated: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            userInfo: {
                avatar: string;
            };
            name: string;
        };
        reacts: {
            user: {
                userInfo: {
                    avatar: string;
                };
                name: string;
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
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            name: string;
        };
        reacts: {
            user: {
                userInfo: {
                    avatar: string;
                };
                name: string;
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
            userInfo: {
                avatar: string;
            };
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
