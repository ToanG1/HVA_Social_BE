"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendshipsModule = void 0;
const common_1 = require("@nestjs/common");
const friendships_service_1 = require("./friendships.service");
const friendships_controller_1 = require("./friendships.controller");
const groups_service_1 = require("../groups/groups.service");
const chats_service_1 = require("../chats/chats.service");
const prisma_service_1 = require("../prisma/prisma.service");
let FriendshipsModule = class FriendshipsModule {
};
exports.FriendshipsModule = FriendshipsModule;
exports.FriendshipsModule = FriendshipsModule = __decorate([
    (0, common_1.Module)({
        controllers: [friendships_controller_1.FriendshipsController],
        providers: [friendships_service_1.FriendshipsService, groups_service_1.GroupsService, chats_service_1.ChatsService, prisma_service_1.PrismaService],
    })
], FriendshipsModule);
//# sourceMappingURL=friendships.module.js.map