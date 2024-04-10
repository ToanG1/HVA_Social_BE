import { ChatService } from './chat.service';
import { CreateChatRoomDto } from '../dto/create-chat-room.dto';
import { CreateChatUserDto } from '../dto/create-chat-user.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    findAllChatRooms(req: any): import(".prisma/client").Prisma.PrismaPromise<({
        chatUsers: {
            userId: string;
            user: {
                name: string;
                userInfo: {
                    avatar: string;
                };
            };
        }[];
    } & {
        id: string;
        name: string;
        isPublic: boolean;
        ownerId: string;
        createdAt: Date;
    })[]>;
    findAllMessagesInChatRoom(chatRoomId: string, req: any): Promise<{
        id: string;
        chatRoomId: string;
        chatUserId: string;
        content: string;
        createdAt: Date;
    }[]>;
    createChatRoom(createChatRoomDto: CreateChatRoomDto, req: any, userId: string): Promise<{
        id: string;
        name: string;
        chatUsers: {
            id: string;
            chatRoomId: string;
            userId: string;
            createdAt: Date;
        }[];
    }>;
    createChatUser(createChatUserDto: CreateChatUserDto, req: any): Promise<{
        id: string;
        chatRoomId: string;
        userId: string;
        createdAt: Date;
    }>;
    deleteChatUser(chatRoomId: string, userId: string, req: any): Promise<string>;
    deleteChatRoom(chatRoomId: string, req: any): Promise<string>;
}
