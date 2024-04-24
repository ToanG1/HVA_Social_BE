import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import { TypingDto } from '../dto/typing.dto';
import { ChatAiApiService } from 'src/modules/ai-api/chat/chat-ai-api.service';
export declare class ChatGateway {
    private readonly chatService;
    private readonly chatAiApiService;
    constructor(chatService: ChatService, chatAiApiService: ChatAiApiService);
    server: Server;
    create(createChatDto: CreateChatDto, req: any): Promise<void>;
    typing(typingDto: TypingDto, req: any): void;
    chatWithAI(chatAiObj: any): Promise<any>;
}
