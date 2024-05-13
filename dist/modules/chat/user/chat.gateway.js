"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("./chat.service");
const create_chat_dto_1 = require("../dto/create-chat.dto");
const typing_dto_1 = require("../dto/typing.dto");
const common_2 = require("@nestjs/common");
const auth_guard_1 = require("../../../guard/auth.guard");
const chat_ai_api_service_1 = require("../../ai-api/chat/chat-ai-api.service");
let ChatGateway = class ChatGateway {
    constructor(chatService, chatAiApiService) {
        this.chatService = chatService;
        this.chatAiApiService = chatAiApiService;
    }
    async create(createChatDto, req) {
        const chatUser = await this.chatService.findChatUserByUserId(createChatDto.chatRoomId, req.user.sub);
        if (!chatUser) {
            throw new common_1.ForbiddenException('You are not a member of this chat room');
        }
        createChatDto.chatUserId = chatUser.id;
        this.server.emit('message', await this.chatService.createChat(createChatDto));
    }
    typing(typingDto, req) {
        if (!this.chatService.isUserBelongToChatRoom(req.user.sub, typingDto.chatRoomId)) {
            throw new common_1.ForbiddenException('You are not a member of this chat room');
        }
        this.server.emit('typing', typingDto);
    }
    async chatWithAI(chatAiObj) {
        let response;
        if (chatAiObj.image) {
            response = await this.chatAiApiService.chatWithVision(chatAiObj);
        }
        else {
            response = await this.chatAiApiService.chat(chatAiObj);
        }
        this.server.emit('chatWithAI', response);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.CreateChatDto, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "create", null);
__decorate([
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    (0, websockets_1.SubscribeMessage)('typing'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typing_dto_1.TypingDto, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "typing", null);
__decorate([
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard),
    (0, websockets_1.SubscribeMessage)('chatWithAI'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "chatWithAI", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        chat_ai_api_service_1.ChatAiApiService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map