"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./user/post.service");
const post_controller_1 = require("./user/post.controller");
const user_service_1 = require("../user/user/user.service");
const prisma_service_1 = require("../prisma/prisma.service");
const mail_sender_service_1 = require("../mail-sender/mail-sender.service");
const nsfw_api_service_1 = require("../ai-api/nsfw-content/nsfw-api.service");
const axios_1 = require("@nestjs/axios");
const post_admin_controller_1 = require("./admin/post-admin.controller");
const post_admin_service_1 = require("./admin/post-admin.service");
let PostModule = class PostModule {
};
exports.PostModule = PostModule;
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        controllers: [post_controller_1.PostController, post_admin_controller_1.PostAdminController],
        providers: [
            post_service_1.PostService,
            post_admin_service_1.PostAdminService,
            user_service_1.UserService,
            prisma_service_1.PrismaService,
            mail_sender_service_1.MailSenderService,
            nsfw_api_service_1.NSFWApiService,
        ],
        imports: [axios_1.HttpModule],
    })
], PostModule);
//# sourceMappingURL=post.module.js.map