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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const create_post_dto_1 = require("../dto/create-post.dto");
const update_post_dto_1 = require("../dto/update-post.dto");
const pagination_interceptors_1 = require("../../../interceptors/pagination.interceptors");
const auth_guard_1 = require("../../../guard/auth.guard");
const nsfw_api_service_1 = require("../../ai-api/nsfw-content/nsfw-api.service");
const function_code_enum_1 = require("../../../utils/enums/function-code.enum");
let PostController = class PostController {
    constructor(postService, nsfwApiService) {
        this.postService = postService;
        this.nsfwApiService = nsfwApiService;
    }
    async create(createPostDto, req) {
        const post = await this.postService.create(createPostDto, req.user.sub);
        if (!(await this.checkNSFWPost(post, req.user.sub))) {
            return post;
        }
        await this.postService.remove(post.id);
        throw new common_1.NotAcceptableException('Your post violated our Community Standard for NSFW content');
    }
    async findAll() {
        return await this.postService.findAll();
    }
    async search(content) {
        return await this.postService.search(content);
    }
    findOne(id) {
        return this.postService.findOne(id);
    }
    async update(id, updatePostDto, req) {
        const post = await this.postService.findOne(id);
        if (post.user.id !== req.user.sub) {
            throw new common_1.ForbiddenException();
        }
        const updatedPost = await this.postService.update(id, updatePostDto);
        if (this.checkNSFWPost(updatedPost, req.user.sub)) {
            return updatedPost;
        }
        await this.postService.remove(updatedPost.id);
        throw new common_1.NotAcceptableException('Your post violated our Community Standard for NSFW content');
    }
    async remove(id, req) {
        const post = await this.postService.findOne(id);
        if (post.user.id !== req.user.sub) {
            throw new common_1.ForbiddenException();
        }
        return this.postService.remove(id);
    }
    async checkNSFWPost(post, userId) {
        if (!post) {
            return false;
        }
        if (post.content) {
            const resultText = await this.nsfwApiService.checkNSFWContent({
                content: post.content,
                priority: 'high',
                type: 'text',
                userId: userId,
                functionCode: function_code_enum_1.FunctionCode.POST,
                idObject: post.id,
            });
            if (resultText.isBanned) {
                return false;
            }
        }
        if (post.images) {
            return post.images.forEach(async (image) => {
                const resultImage = await this.nsfwApiService.checkNSFWContent({
                    content: image,
                    priority: 'high',
                    type: 'image',
                    userId: userId,
                    functionCode: function_code_enum_1.FunctionCode.POST,
                    idObject: post.id,
                });
                if (resultImage.isBanned) {
                    return false;
                }
            });
        }
        return true;
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(pagination_interceptors_1.PaginationInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)(pagination_interceptors_1.PaginationInterceptor),
    __param(0, (0, common_1.Query)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "remove", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService,
        nsfw_api_service_1.NSFWApiService])
], PostController);
//# sourceMappingURL=post.controller.js.map