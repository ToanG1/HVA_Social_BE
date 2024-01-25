import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    createChats(createChatDto: CreateChatDto, req: any): Promise<{
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
    searchUserMessage(id: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: string): Promise<{
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
    update(id: string, updateChatDto: UpdateChatDto): Promise<{
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
