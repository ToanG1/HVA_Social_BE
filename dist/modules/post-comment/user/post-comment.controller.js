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
exports.PostCommentController = void 0;
const common_1 = require("@nestjs/common");
const post_comment_service_1 = require("./post-comment.service");
const create_post_comment_dto_1 = require("../dto/create-post-comment.dto");
const update_post_comment_dto_1 = require("../dto/update-post-comment.dto");
const pagination_interceptors_1 = require("../../../interceptors/pagination.interceptors");
const auth_guard_1 = require("../../../guard/auth.guard");
let PostCommentController = class PostCommentController {
    constructor(postCommentService) {
        this.postCommentService = postCommentService;
    }
    async create(createPostCommentDto, req) {
        return await this.postCommentService.create(createPostCommentDto, req.user.sub);
    }
    findCommentsOfPost(id) {
        return this.postCommentService.getCommentPost(id);
    }
    async update(id, updatePostCommentDto, req) {
        const commentpost = await this.postCommentService.findOne(id);
        if (!commentpost)
            throw new common_1.ForbiddenException();
        if (commentpost.userId !== req.user.sub) {
            throw new common_1.ForbiddenException();
        }
        return this.postCommentService.update(id, updatePostCommentDto);
    }
    async remove(id, req) {
        const commentpost = await this.postCommentService.findOne(id);
        if (!commentpost)
            throw new common_1.ForbiddenException();
        if (commentpost.userId !== req.user.sub) {
            throw new common_1.ForbiddenException();
        }
        return this.postCommentService.remove(id);
    }
};
exports.PostCommentController = PostCommentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_comment_dto_1.CreatePostCommentDto, Object]),
    __metadata("design:returntype", Promise)
], PostCommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(pagination_interceptors_1.PaginationInterceptor),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostCommentController.prototype, "findCommentsOfPost", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_comment_dto_1.UpdatePostCommentDto, Object]),
    __metadata("design:returntype", Promise)
], PostCommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostCommentController.prototype, "remove", null);
exports.PostCommentController = PostCommentController = __decorate([
    (0, common_1.Controller)('post-comment'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [post_comment_service_1.PostCommentService])
], PostCommentController);
//# sourceMappingURL=post-comment.controller.js.map