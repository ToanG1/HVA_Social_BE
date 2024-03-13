import { CreateChatDto } from '../dto/create-chat.dto';
import { CreateChatRoomDto } from '../dto/create-chat-room.dto';
import { CreateChatUserDto } from '../dto/create-chat-user.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
export declare class ChatService {
    private readonly prismaService;
    deleteChatRoom(chatRoomId: string): Promise<string>;
    deleteChatUser(chatRoomId: string, userId: string): Promise<string>;
    constructor(prismaService: PrismaService);
    isUserBelongToChatRoom(userId: string, chatRoomId: string): Promise<boolean>;
    isUserChatRoomOwner(userId: string, chatRoomId: string): Promise<boolean>;
    findAllChatRooms(userId: string): import(".prisma/client").Prisma.PrismaPromise<({
        chatUsers: {
            id: string;
            chatRoomId: string;
            userId: string;
            createdAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        isPublic: boolean;
        ownerId: string;
        createdAt: Date;
    })[]>;
    findAllMessagesInChatRoom(chatRoomId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        chatRoomId: string;
        chatUserId: string;
        content: string;
        createdAt: Date;
    }[]>;
    createChatRoom(userId: string, createChatRoomDto: CreateChatRoomDto): import(".prisma/client").Prisma.Prisma__ChatRoomClient<{
        id: string;
        name: string;
        isPublic: boolean;
        ownerId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createChatUser(createChatUserDto: CreateChatUserDto): import(".prisma/client").Prisma.Prisma__ChatUserClient<{
        id: string;
        chatRoomId: string;
        userId: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createChat(createChatDto: CreateChatDto): import(".prisma/client").Prisma.Prisma__ChatClient<{
        id: string;
        chatRoomId: string;
        chatUserId: string;
        content: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
