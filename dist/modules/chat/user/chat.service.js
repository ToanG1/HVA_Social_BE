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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ChatService = class ChatService {
    findChatUserByUserId(roomId, userId) {
        return this.prismaService.chatUser.findUnique({
            where: {
                chatRoomId_userId: {
                    chatRoomId: roomId,
                    userId: userId,
                },
            },
        });
    }
    async deleteChatRoom(chatRoomId) {
        try {
            await this.prismaService.chatRoom.delete({
                where: {
                    id: chatRoomId,
                },
            });
            return 'success';
        }
        catch (err) {
            throw err;
        }
    }
    async deleteChatUser(chatRoomId, userId) {
        try {
            await this.prismaService.chatUser.delete({
                where: {
                    chatRoomId_userId: {
                        chatRoomId: chatRoomId,
                        userId: userId,
                    },
                },
            });
            return 'success';
        }
        catch (err) {
            throw err;
        }
    }
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async isUserBelongToChatRoom(userId, chatRoomId) {
        return ((await this.prismaService.chatUser.count({
            where: {
                userId: userId,
                chatRoomId: chatRoomId,
            },
        })) > 0);
    }
    isUserChatRoomOwner(userId, chatRoomId) {
        return this.findChatUserByUserId(chatRoomId, userId) ? true : false;
    }
    findAllChatRooms(userId) {
        return this.prismaService.chatRoom.findMany({
            where: {
                chatUsers: {
                    some: {
                        userId: userId,
                    },
                },
            },
            include: {
                chatUsers: {
                    select: {
                        userId: true,
                        user: {
                            select: {
                                name: true,
                                userInfo: {
                                    select: {
                                        avatar: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    findAllMessagesInChatRoom(chatRoomId) {
        return this.prismaService.chat.findMany({
            where: {
                chatRoomId: chatRoomId,
            },
        });
    }
    findOne(currentUserId, userId) {
        return this.prismaService.chatRoom.findFirst({
            where: {
                OR: [
                    {
                        ownerId: currentUserId,
                    },
                    {
                        ownerId: userId,
                    },
                ],
                chatUsers: {
                    every: {
                        userId: {
                            in: [currentUserId, userId],
                        },
                    },
                },
            },
        });
    }
    createChatRoom(userId, createChatRoomDto) {
        return this.prismaService.chatRoom.create({
            data: {
                name: createChatRoomDto.name,
                ownerId: userId,
                isPublic: createChatRoomDto.isPublic,
            },
        });
    }
    createChatUser(createChatUserDto) {
        return this.prismaService.chatUser.create({
            data: {
                chatRoomId: createChatUserDto.chatRoomId,
                userId: createChatUserDto.userId,
            },
        });
    }
    createChat(createChatDto) {
        return this.prismaService.chat.create({
            data: {
                chatRoomId: createChatDto.chatRoomId,
                chatUserId: createChatDto.chatUserId,
                content: createChatDto.content,
            },
        });
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatService);
//# sourceMappingURL=chat.service.js.map