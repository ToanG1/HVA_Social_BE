"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./user/chat.service");
const chat_gateway_1 = require("./user/chat.gateway");
const prisma_service_1 = require("../prisma/prisma.service");
const chat_controller_1 = require("./user/chat.controller");
const chat_ai_api_service_1 = require("../ai-api/chat/chat-ai-api.service");
const axios_1 = require("@nestjs/axios");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        providers: [chat_gateway_1.ChatGateway, chat_service_1.ChatService, prisma_service_1.PrismaService, chat_ai_api_service_1.ChatAiApiService],
        controllers: [chat_controller_1.ChatController],
        imports: [axios_1.HttpModule],
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map