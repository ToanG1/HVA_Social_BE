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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FollowService = class FollowService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(followerId, followedId) {
        return this.prismaService.follow.create({
            data: {
                followerId,
                followedId,
            },
        });
    }
    findAllOfUser(userId) {
        return this.prismaService.follow.findMany({
            where: {
                OR: [
                    {
                        followerId: userId,
                    },
                    {
                        followedId: userId,
                    },
                ],
            },
            select: {
                followed: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                follower: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    remove(id) {
        return this.prismaService.follow.delete({
            where: {
                id,
            },
        });
    }
};
exports.FollowService = FollowService;
exports.FollowService = FollowService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FollowService);
//# sourceMappingURL=follow.service.js.map