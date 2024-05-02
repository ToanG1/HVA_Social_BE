import { ChatService } from './chat.service';
import { CreateChatRoomDto } from '../dto/create-chat-room.dto';
import { CreateChatUserDto } from '../dto/create-chat-user.dto';
import { ChatAiApiService } from 'src/modules/ai-api/chat/chat-ai-api.service';
export declare class ChatController {
    private readonly chatService;
    private readonly chatAiApiService;
    constructor(chatService: ChatService, chatAiApiService: ChatAiApiService);
    findAllChatRooms(req: any): import(".prisma/client").Prisma.PrismaPromise<({
        chatUsers: {
            user: {
                userInfo: {
                    avatar: string;
                };
                name: string;
            };
            userId: string;
        }[];
    } & {
        id: string;
        name: string;
        isPublic: boolean;
        ownerId: string;
        createdAt: Date;
    })[]>;
    findAllMessagesInChatRoom(chatRoomId: string, req: any): Promise<{
        chatUser: {
            user: {
                userInfo: {
                    avatar: string;
                };
                id: string;
                name: string;
            };
        };
        id: string;
        content: string;
        chatRoomId: string;
    }[]>;
    createChatRoom(createChatRoomDto: CreateChatRoomDto, req: any, userId: string): Promise<{
        id: string;
        name: string;
        chatUsers: {
            user: {
                userInfo: {
                    avatar: string;
                };
                name: string;
            };
            userId: string;
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
    chatWithAI(): Promise<any>;
}
