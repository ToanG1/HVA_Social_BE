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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const update_post_dto_1 = require("../dto/update-post.dto");
const prisma_service_1 = require("../../prisma/prisma.service");
let PostService = class PostService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createPostDto, userId) {
        return await this.prismaService.post.create({
            data: {
                content: createPostDto.content,
                userId: userId,
                videos: createPostDto.videos,
                images: createPostDto.images,
                createdAt: new Date(),
                updatedAt: new Date(),
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
                email: true,
                isAdmin: true,
                userInfo: true,
            },
        });
    }
    async updatePost(id, updatePost) {
        const foundUser = await this.findUserById(id);
    }
    async findUserById(id) {
        return await this.prismaService.post.findUnique({
            where: {
                id: id,
            },
        });
    }
    findAll() {
        return this.prismaService.post.findMany({
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
    async findOne(id) {
        const q = await this.prismaService.post.findUnique({
            where: {
                id,
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
    async get(userId) {
        return this.prismaService.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                name: true,
                email: true,
                isAdmin: true,
                userInfo: true,
            },
        });
    }
    async update(id, updatePostDto) {
        const post = this.prismaService.post.update({
            where: {
                id: id,
            },
            data: {
                content: updatePostDto.content || undefined,
                videos: updatePostDto.videos || undefined,
                images: updatePostDto.images || undefined,
                updatedAt: new Date(),
            },
        });
        return post;
    }
    async remove(Id) {
        const deleteReplies = this.prismaService.postComment.deleteMany({
            where: {
                id: String(Id),
            },
        });
        const deletePost = this.prismaService.post.delete({
            where: {
                id: String(Id),
            },
        });
        await this.prismaService.$transaction([deleteReplies, deletePost]);
        return 'success';
    }
    search(searchString) {
        return this.prismaService.post.findMany({
            where: {
                content: {
                    contains: searchString,
                    mode: 'insensitive',
                },
            },
            include: {
                user: {
                    select: {
                        name: true,
                    },
                },
            },
        });
    }
};
exports.PostService = PostService;
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostService.prototype, "update", null);
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=post.service.js.map