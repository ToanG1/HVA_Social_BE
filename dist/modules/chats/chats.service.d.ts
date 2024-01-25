import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ChatsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createChatDto: CreateChatDto, userId: string, flower: string): Promise<{
        id: string;
        userId: string;
        follower: string;
        creator: string;
        recipient: string;
        messages: string;
        isActivated: boolean;
        statusMessage: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastMessageSentUpdateAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            name: string;
        };
    } & {
        id: string;
        userId: string;
        follower: string;
        creator: string;
        recipient: string;
        messages: string;
        isActivated: boolean;
        statusMessage: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastMessageSentUpdateAt: Date;
    })[]>;
    findOne(flower: string): Promise<{
        user: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        userId: string;
        follower: string;
        creator: string;
        recipient: string;
        messages: string;
        isActivated: boolean;
        statusMessage: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastMessageSentUpdateAt: Date;
    }>;
    search(searchString: string): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            follow: {
                id: string;
                followerId: string;
                createdAt: Date;
            }[];
            name: string;
        };
    } & {
        id: string;
        userId: string;
        follower: string;
        creator: string;
        recipient: string;
        messages: string;
        isActivated: boolean;
        statusMessage: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastMessageSentUpdateAt: Date;
    })[]>;
    getPost(userId: string): Promise<{
        chats: {
            id: string;
            userId: string;
            follower: string;
            creator: string;
            recipient: string;
            messages: string;
            isActivated: boolean;
            statusMessage: boolean;
            createdAt: Date;
            updatedAt: Date;
            lastMessageSentUpdateAt: Date;
        }[];
        name: string;
        isAdmin: boolean;
        id: string;
    }>;
    updateChat(id: string, updateChatDto: UpdateChatDto): Promise<{
        id: string;
        userId: string;
        follower: string;
        creator: string;
        recipient: string;
        messages: string;
        isActivated: boolean;
        statusMessage: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastMessageSentUpdateAt: Date;
    }>;
    remove(id: string): Promise<string>;
}
