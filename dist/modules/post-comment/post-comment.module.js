"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCommentModule = void 0;
const common_1 = require("@nestjs/common");
const post_comment_service_1 = require("./user/post-comment.service");
const post_comment_controller_1 = require("./user/post-comment.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const user_service_1 = require("../user/user/user.service");
let PostCommentModule = class PostCommentModule {
};
exports.PostCommentModule = PostCommentModule;
exports.PostCommentModule = PostCommentModule = __decorate([
    (0, common_1.Module)({
        controllers: [post_comment_controller_1.PostCommentController],
        providers: [post_comment_service_1.PostCommentService, user_service_1.UserService, prisma_service_1.PrismaService],
    })
], PostCommentModule);
//# sourceMappingURL=post-comment.module.js.map