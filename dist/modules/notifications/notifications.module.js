"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = void 0;
const common_1 = require("@nestjs/common");
const notifications_service_1 = require("./notifications.service");
const notifications_controller_1 = require("./notifications.controller");
const user_service_1 = require("../user/user.service");
const post_comment_service_1 = require("../post-comment/user/post-comment.service");
const post_service_1 = require("../post/user/post.service");
const post_reply_comment_service_1 = require("../post-reply-comment/post-reply-comment.service");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationsModule = class NotificationsModule {
};
exports.NotificationsModule = NotificationsModule;
exports.NotificationsModule = NotificationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [notifications_controller_1.NotificationsController],
        providers: [
            notifications_service_1.NotificationsService,
            user_service_1.UserService,
            post_comment_service_1.PostCommentService,
            post_service_1.PostService,
            post_reply_comment_service_1.PostReplyCommentService,
            prisma_service_1.PrismaService,
        ],
    })
], NotificationsModule);
//# sourceMappingURL=notifications.module.js.map