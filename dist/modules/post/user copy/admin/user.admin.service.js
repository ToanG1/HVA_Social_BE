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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserAdminService = class UserAdminService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        const users = await this.prismaService.user.findMany();
        return users.map((user) => {
            const { password, ...result } = user;
            return result;
        });
    }
    findAllByAdmin() {
        return this.prismaService.user.findMany();
    }
    async updateUser(userId, updateUser) {
        return this.prismaService.user.update({
            where: {
                uuid: userId,
            },
            data: {
                name: updateUser.name || undefined,
                email: updateUser.email || undefined,
                password: updateUser.password || undefined,
                isAdmin: updateUser.isAdmin || undefined,
                updatedAt: new Date(),
            },
        });
    }
    async ban(uuid) {
        return this.prismaService.user.update({
            where: {
                uuid: uuid,
            },
            data: {
                isActivated: false,
            },
        });
    }
    findOneByAdmin(uuid) {
        return this.prismaService.user.findUnique({
            where: {
                uuid: uuid,
            },
            select: {
                email: true,
            },
        });
    }
};
exports.UserAdminService = UserAdminService;
exports.UserAdminService = UserAdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UserAdminService);
//# sourceMappingURL=user.admin.service.js.map