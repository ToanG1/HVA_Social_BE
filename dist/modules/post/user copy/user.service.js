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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
const token_type_enum_1 = require("src/utils/enums/token-type.enum");
const Rounds = 10;
let UserService = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAllUsers() {
        return await this.prismaService.user.findMany();
    }
    async createUser(userDto) {
        const foundUser = await this.prismaService.user.findUnique({
            where: {
                email: userDto.email,
            },
        });
        if (foundUser) {
            throw new common_1.HttpException('user with this email already exists', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const hashedPassword = await bcrypt.hash(userDto.password, Rounds);
        userDto.password = hashedPassword;
        const createdUser = await this.prismaService.user.create({
            data: userDto,
        });
        const { password, ...result } = createdUser;
        return result;
    }
    async getUser(userId) {
        return this.prismaService.user.findUnique({
            where: {
                uuid: userId,
            },
            select: {
                uuid: true,
                name: true,
                email: true,
                isAdmin: true,
                userInfo: true,
                followers: true,
                following: true,
            },
        });
    }
    async updateUser(userId, updateUser) {
        const foundUser = await this.findUserById(userId);
        await this.throwNotFoundIfUserNotProvided(foundUser);
        const updatedUser = await this.prismaService.user.update({
            where: {
                uuid: userId,
            },
            data: {
                name: updateUser.name || undefined,
                email: updateUser.email || undefined,
                password: updateUser.password || undefined,
                isAdmin: updateUser.isAdmin || undefined,
                updatedAt: new Date(),
                userInfo: {
                    upsert: {
                        where: {
                            userId: userId,
                        },
                        update: {
                            avatar: updateUser.avatar || undefined,
                            about: updateUser.about,
                            socialLink: updateUser.socialLink || undefined,
                            updatedAt: new Date(),
                        },
                        create: {
                            avatar: updateUser.avatar || undefined,
                            about: updateUser.about,
                            socialLink: updateUser.socialLink || undefined,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        },
                    },
                },
            },
        });
        const { password, ...result } = updatedUser;
        return result;
    }
    async deleteUser(userId) {
        const foundUser = await this.findUserById(userId);
        await this.throwNotFoundIfUserNotProvided(foundUser);
        const deletedUser = await this.prismaService.user.delete({
            where: {
                uuid: userId,
            },
        });
        return deletedUser;
    }
    async findUserById(userID) {
        return await this.prismaService.user.findUnique({
            where: {
                uuid: userID,
            },
        });
    }
    async throwNotFoundIfUserNotProvided(user) {
        if (!user)
            throw new common_1.HttpException('user not found', common_1.HttpStatus.NOT_FOUND);
    }
    async findOneByEmail(email) {
        const foundUser = await this.prismaService.user.findUnique({
            where: {
                email: email,
            },
            include: {
                userInfo: true,
            },
        });
        if (!foundUser) {
            throw new common_1.HttpException('there was no user found with this email', common_1.HttpStatus.NOT_FOUND);
        }
        return foundUser;
    }
    async changePassword(token, newPassword) {
        const foundToken = await this.prismaService.token.findUnique({
            where: {
                token_type: {
                    token: token,
                    type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.URL_TOKEN],
                },
            },
        });
        if (!foundToken) {
            throw new common_1.NotFoundException('Your token is wrong');
        }
        else if (foundToken.expiresAt < new Date()) {
            throw new common_1.NotFoundException('Your token is expired');
        }
        const deleteToken = this.prismaService.token.delete({
            where: foundToken,
        });
        const updatePassword = this.prismaService.user.update({
            where: {
                uuid: foundToken.userId,
            },
            data: {
                password: await bcrypt.hash(newPassword, Rounds),
            },
        });
        this.prismaService.$transaction([deleteToken, updatePassword]);
    }
    async findAll() {
        const users = await this.prismaService.user.findMany();
        return users.map((user) => {
            const { password, ...result } = user;
            return result;
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UserService);
//# sourceMappingURL=user.service.js.map