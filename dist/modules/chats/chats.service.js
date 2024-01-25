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
exports.ChatsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ChatsService = class ChatsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createChatDto, userId, flower) {
        const creatChat = this.prismaService.chats.create({
            data: {
                userId: userId,
                follower: flower,
                creator: createChatDto.creator,
                recipient: createChatDto.recipient,
                messages: createChatDto.messages,
            },
        });
        return creatChat;
    }
    findAll() {
        return this.prismaService.chats.findMany({
            where: {
                isActivated: true,
            },
            include: {
                user: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(flower) {
        const q = await this.prismaService.chats.findUnique({
            where: {
                id: flower,
            },
            include: {
                user: {
                    select: {
                        name: true,
                        id: true,
                    },
                },
            },
        });
        return q;
    }
    search(searchString) {
        return this.prismaService.chats.findMany({
            where: {
                messages: {
                    contains: searchString,
                    mode: 'insensitive',
                },
            },
            include: {
                user: {
                    select: {
                        name: true,
                        follow: true,
                    },
                },
            },
        });
    }
    async getPost(userId) {
        return this.prismaService.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                name: true,
                chats: true,
                isAdmin: true,
            },
        });
    }
    async updateChat(id, updateChatDto) {
        const updateChat = this.prismaService.chats.update({
            where: {
                id: id,
            },
            data: {
                statusMessage: updateChatDto.statusMessage,
                updatedAt: new Date(),
            },
        });
        return updateChat;
    }
    async remove(id) {
        const deleteChats = this.prismaService.chats.delete({
            where: {
                id: String(id),
            },
        });
        await this.prismaService.$transaction([deleteChats]);
        return 'success';
    }
};
exports.ChatsService = ChatsService;
exports.ChatsService = ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatsService);
//# sourceMappingURL=chats.service.js.map