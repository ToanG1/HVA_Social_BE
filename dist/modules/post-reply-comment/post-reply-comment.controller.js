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
exports.PostReplyCommentController = void 0;
const common_1 = require("@nestjs/common");
const post_reply_comment_service_1 = require("./post-reply-comment.service");
const create_post_reply_comment_dto_1 = require("./dto/create-post-reply-comment.dto");
const update_post_reply_comment_dto_1 = require("./dto/update-post-reply-comment.dto");
let PostReplyCommentController = class PostReplyCommentController {
    constructor(postReplyCommentService) {
        this.postReplyCommentService = postReplyCommentService;
    }
    async create(createPostReplyCommentDto, req) {
        return await this.postReplyCommentService.create(createPostReplyCommentDto, req.user.sub, req.post.sub);
    }
    findAll() {
        return this.postReplyCommentService.findAll();
    }
    findOne(id) {
        return this.postReplyCommentService.findOne(id);
    }
    update(id, updatePostReplyCommentDto) {
        return this.postReplyCommentService.update(id, updatePostReplyCommentDto);
    }
    remove(id) {
        return this.postReplyCommentService.remove(id);
    }
};
exports.PostReplyCommentController = PostReplyCommentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_reply_comment_dto_1.CreatePostReplyCommentDto, Object]),
    __metadata("design:returntype", Promise)
], PostReplyCommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostReplyCommentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostReplyCommentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_reply_comment_dto_1.UpdatePostReplyCommentDto]),
    __metadata("design:returntype", void 0)
], PostReplyCommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostReplyCommentController.prototype, "remove", null);
exports.PostReplyCommentController = PostReplyCommentController = __decorate([
    (0, common_1.Controller)('post-reply-comment'),
    __metadata("design:paramtypes", [post_reply_comment_service_1.PostReplyCommentService])
], PostReplyCommentController);
//# sourceMappingURL=post-reply-comment.controller.js.map