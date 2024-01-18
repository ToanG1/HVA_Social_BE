"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./modules/user/user.module");
const post_module_1 = require("./modules/post/post.module");
const post_comment_module_1 = require("./modules/post-comment/post-comment.module");
const post_reply_comment_module_1 = require("./modules/post-reply-comment/post-reply-comment.module");
const friendships_module_1 = require("./modules/friendships/friendships.module");
const groups_module_1 = require("./modules/groups/groups.module");
const chats_module_1 = require("./modules/chats/chats.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const ad_management_module_1 = require("./modules/ad-management/ad-management.module");
const ad_categories_module_1 = require("./modules/ad-categories/ad-categories.module");
const logs_module_1 = require("./modules/logs/logs.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            post_module_1.PostModule,
            post_comment_module_1.PostCommentModule,
            post_reply_comment_module_1.PostReplyCommentModule,
            friendships_module_1.FriendshipsModule,
            groups_module_1.GroupsModule,
            chats_module_1.ChatsModule,
            notifications_module_1.NotificationsModule,
            ad_management_module_1.AdManagementModule,
            ad_categories_module_1.AdCategoriesModule,
            logs_module_1.LogsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map