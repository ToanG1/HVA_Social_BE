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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../../guard/auth.guard");
const chat_service_1 = require("./chat.service");
const pagination_interceptors_1 = require("../../../interceptors/pagination.interceptors");
const create_chat_room_dto_1 = require("../dto/create-chat-room.dto");
const create_chat_user_dto_1 = require("../dto/create-chat-user.dto");
const chat_ai_api_service_1 = require("../../ai-api/chat/chat-ai-api.service");
let ChatController = class ChatController {
    constructor(chatService, chatAiApiService) {
        this.chatService = chatService;
        this.chatAiApiService = chatAiApiService;
    }
    findAllChatRooms(req) {
        return this.chatService.findAllChatRooms(req.user.id);
    }
    async findAllMessagesInChatRoom(chatRoomId, req) {
        if (await !this.chatService.isUserBelongToChatRoom(req.user.id, chatRoomId)) {
            throw new common_1.ForbiddenException('You are not a member of this chat room');
        }
        return this.chatService.findAllMessagesInChatRoom(chatRoomId);
    }
    async createChatRoom(createChatRoomDto, req, userId) {
        const room = await this.chatService.findOne(req.user.sub, userId);
        if (!room) {
            const newRoom = await this.chatService.createChatRoom(req.user.sub, createChatRoomDto);
            await this.chatService.createChatUser(new create_chat_user_dto_1.CreateChatUserDto(newRoom.id, req.user.sub));
            await this.chatService.createChatUser(new create_chat_user_dto_1.CreateChatUserDto(newRoom.id, userId));
        }
        return room != null
            ? room
            : await this.chatService.findOne(req.user.sub, userId);
    }
    async createChatUser(createChatUserDto, req) {
        if (await !this.chatService.isUserBelongToChatRoom(req.user.sub, createChatUserDto.chatRoomId)) {
            throw new common_1.ForbiddenException();
        }
        return this.chatService.createChatUser(createChatUserDto);
    }
    async deleteChatUser(chatRoomId, userId, req) {
        if (!(await this.chatService.isUserBelongToChatRoom(req.user.sub, chatRoomId))) {
            throw new common_1.ForbiddenException();
        }
        if (!(await this.chatService.isUserChatRoomOwner(req.user.sub, chatRoomId)) ||
            userId !== req.user.sub) {
            throw new common_1.ForbiddenException();
        }
        return await this.chatService.deleteChatUser(chatRoomId, userId);
    }
    async deleteChatRoom(chatRoomId, req) {
        if (!(await this.chatService.isUserChatRoomOwner(req.user.sub, chatRoomId))) {
            throw new common_1.ForbiddenException();
        }
        return await this.chatService.deleteChatRoom(chatRoomId);
    }
    chatWithAI() {
        return this.chatAiApiService.initChat();
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Get)('rooms'),
    (0, common_1.UseInterceptors)(pagination_interceptors_1.PaginationInterceptor),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findAllChatRooms", null);
__decorate([
    (0, common_1.Get)('rooms/:id'),
    (0, common_1.UseInterceptors)(pagination_interceptors_1.PaginationInterceptor),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "findAllMessagesInChatRoom", null);
__decorate([
    (0, common_1.Post)('room'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_room_dto_1.CreateChatRoomDto, Object, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createChatRoom", null);
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_user_dto_1.CreateChatUserDto, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createChatUser", null);
__decorate([
    (0, common_1.Delete)(':roomId/user'),
    __param(0, (0, common_1.Param)('roomId')),
    __param(1, (0, common_1.Query)('userId')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteChatUser", null);
__decorate([
    (0, common_1.Delete)(':roomId'),
    __param(0, (0, common_1.Param)('roomId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteChatRoom", null);
__decorate([
    (0, common_1.Get)('chatWithAI'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "chatWithAI", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        chat_ai_api_service_1.ChatAiApiService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map