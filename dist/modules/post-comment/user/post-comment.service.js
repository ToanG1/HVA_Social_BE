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
exports.PostCommentService = void 0;
const common_1 = require("@nestjs/common");
const update_post_comment_dto_1 = require("../dto/update-post-comment.dto");
const prisma_service_1 = require("../../prisma/prisma.service");
let PostCommentService = class PostCommentService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createPostCommentDto, userId) {
        return await this.prismaService.postComment.create({
            data: {
                content: createPostCommentDto.content,
                userId: userId,
                postId: createPostCommentDto.postId,
                videos: createPostCommentDto.videos,
                images: createPostCommentDto.images,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }
    async findOne(id) {
        return await this.prismaService.postComment.findUnique({
            where: {
                id,
            },
            select: {
                userId: true,
            },
        });
    }
    async getCommentPost(postId) {
        return await this.prismaService.postComment.findMany({
            where: {
                postId: postId,
            },
            select: {
                id: true,
                content: true,
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
                images: true,
                videos: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async update(id, updatePostCommentDto) {
        return await this.prismaService.postComment.update({
            where: {
                id,
            },
            data: {
                content: updatePostCommentDto.content || undefined,
                videos: updatePostCommentDto.videos || undefined,
                images: updatePostCommentDto.images || undefined,
                updatedAt: new Date(),
            },
        });
    }
    async remove(id) {
        await this.prismaService.postComment.delete({
            where: {
                id,
            },
        });
        return 'success';
    }
};
exports.PostCommentService = PostCommentService;
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_comment_dto_1.UpdatePostCommentDto]),
    __metadata("design:returntype", Promise)
], PostCommentService.prototype, "update", null);
exports.PostCommentService = PostCommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostCommentService);
//# sourceMappingURL=post-comment.service.js.map