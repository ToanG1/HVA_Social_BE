import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateChatDto } from '../dto/create-chat.dto';
import { TypingDto } from '../dto/typing.dto';
export declare class ChatGateway {
    private readonly chatService;
    constructor(chatService: ChatService);
    server: Server;
    create(createChatDto: CreateChatDto, req: any): Promise<void>;
    typing(typingDto: TypingDto, req: any): void;
}
