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
exports.PostReplyCommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostReplyCommentService = class PostReplyCommentService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createPostReplyCommentDto, userId, commentId) {
        const commentReplyPost = await this.prismaService.postReplyComment.create({
            data: {
                content: createPostReplyCommentDto.content,
                userId: userId,
                commentId: commentId,
                videos: createPostReplyCommentDto.video,
                images: createPostReplyCommentDto.image,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return commentReplyPost;
    }
    async getReplyCommentPost(replyComment) {
        return this.prismaService.postComment.findUnique({
            where: {
                id: replyComment,
            },
            select: {
                id: true,
                post: true,
                content: true,
                images: true,
                videos: true,
            },
        });
    }
    findAll() {
        return `This action returns all postReplyComment`;
    }
    findOne(id) {
        return `This action returns a #${id} postReplyComment`;
    }
    update(id, updatePostReplyCommentDto) {
        const replycommentpost = this.prismaService.postReplyComment.update({
            where: {
                id: id,
            },
            data: {
                content: updatePostReplyCommentDto.content || undefined,
                videos: updatePostReplyCommentDto.video,
                images: updatePostReplyCommentDto.image,
                updatedAt: new Date(),
            },
        });
        return replycommentpost;
    }
    async remove(id) {
        const deletecomment = this.prismaService.postReplyComment.deleteMany({
            where: {
                id: String(id),
            },
        });
        await this.prismaService.$transaction([deletecomment]);
        return 'success';
    }
};
exports.PostReplyCommentService = PostReplyCommentService;
exports.PostReplyCommentService = PostReplyCommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostReplyCommentService);
//# sourceMappingURL=post-reply-comment.service.js.map