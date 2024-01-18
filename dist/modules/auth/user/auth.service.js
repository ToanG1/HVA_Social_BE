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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../prisma/prisma.service");
const dayjs = require("dayjs");
const token_type_enum_1 = require("../../../utils/enums/token-type.enum");
const mail_sender_service_1 = require("../../mail-sender/mail-sender.service");
const crypto_1 = require("crypto");
const JWT_ACCESS_TOKEN_EXPIRATION_TIME = '30m';
const JWT_REFRESH_TOKEN_EXPIRATION_TIME = '7d';
const getRefreshExpiry = () => dayjs().add(7, 'd').toDate();
const getResetCodeExpiry = () => dayjs().add(5, 'm').toDate();
let AuthService = class AuthService {
    constructor(usersService, jwtService, prismaService, mailService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.mailService = mailService;
    }
    async isUserAdmin(email) {
        const user = await this.usersService.findOneByEmail(email);
        if (user.isAdmin)
            return true;
        else
            throw new common_1.UnauthorizedException('User is not admin');
    }
    async login(loginDto) {
        const user = await this.usersService.findOneByEmail(loginDto.email);
        if (!user || !user.isActivated) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const isMatch = await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) {
            throw new common_1.HttpException('Wrong password', common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = {
            sub: user.id,
            username: user.name,
            email: user.email,
        };
        const refersh_token = await this.getRefreshToken(payload);
        const deleteToken = this.prismaService.token.deleteMany({
            where: {
                userId: user.id,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.REFRESH_TOKEN],
            },
        });
        const token = this.prismaService.token.create({
            data: {
                user: {
                    connect: user,
                },
                token: refersh_token,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.REFRESH_TOKEN],
                expiresAt: getRefreshExpiry(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return this.prismaService
            .$transaction([deleteToken, token])
            .then(async () => {
            return {
                access_token: await this.jwtService.signAsync(payload, {
                    secret: process.env.JWT_SECRET,
                    expiresIn: JWT_ACCESS_TOKEN_EXPIRATION_TIME,
                }),
                refersh_token: refersh_token,
                user_info: {
                    userId: user.id,
                    name: user.name,
                    avatar: user.userInfo ? user.userInfo.avatar : null,
                },
            };
        });
    }
    async signUp(signUpDto) {
        const createdUser = await this.usersService.createUser(signUpDto);
        const activationToken = await this.prismaService.token.create({
            data: {
                user: {
                    connect: createdUser,
                },
                token: (0, crypto_1.randomUUID)(),
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.ACTIVATION_TOKEN],
                expiresAt: getRefreshExpiry(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        this.mailService.sendActiationEmail(createdUser.email, activationToken.token);
        const payload = {
            sub: createdUser.id,
            username: createdUser.name,
            email: createdUser.email,
        };
        const refersh_token = await this.getRefreshToken(payload);
        await this.prismaService.token.create({
            data: {
                user: {
                    connect: createdUser,
                },
                token: refersh_token,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.REFRESH_TOKEN],
                expiresAt: getRefreshExpiry(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return await {
            access_token: await this.jwtService.signAsync(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: JWT_ACCESS_TOKEN_EXPIRATION_TIME,
            }),
            refersh_token: refersh_token,
            user_info: {
                userId: createdUser.id,
                name: createdUser.name,
            },
        };
    }
    async activate(activationToken) {
        try {
            const foundToken = await this.prismaService.token.findUnique({
                where: {
                    token_type: {
                        token: activationToken,
                        type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.ACTIVATION_TOKEN],
                    },
                },
            });
            if (!foundToken)
                throw new common_1.HttpException('Activation token is not present', common_1.HttpStatus.UNAUTHORIZED);
            if (foundToken.expiresAt < new Date())
                throw new common_1.HttpException('Activation token is expired', common_1.HttpStatus.UNAUTHORIZED);
            const deleteToken = this.prismaService.token.delete({
                where: foundToken,
            });
            const activateUser = this.prismaService.user.update({
                where: {
                    id: foundToken.userId,
                },
                data: {
                    isActivated: true,
                },
            });
            return this.prismaService
                .$transaction([deleteToken, activateUser])
                .then(() => {
                return true;
            });
        }
        catch (error) {
            return false;
        }
    }
    async refresh(refershToken) {
        const foundToken = await this.prismaService.token.findUnique({
            where: {
                token_type: {
                    token: refershToken,
                    type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.REFRESH_TOKEN],
                },
            },
            include: {
                user: true,
            },
        });
        if (!foundToken)
            throw new common_1.HttpException('Refresh token is not present', common_1.HttpStatus.UNAUTHORIZED);
        const exp = new Date(foundToken.expiresAt);
        const now = new Date();
        if (exp < now)
            throw new common_1.HttpException('Refresh token is expired!', common_1.HttpStatus.UNAUTHORIZED);
        const payload = {
            sub: foundToken.user.id,
            username: foundToken.user.name,
            email: foundToken.user.email,
        };
        await this.prismaService.token.update({
            where: {
                token_type: {
                    token: refershToken,
                    type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.REFRESH_TOKEN],
                },
            },
            data: {
                updatedAt: new Date(),
            },
        });
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
    async getRefreshToken(payload) {
        return await this.jwtService.signAsync(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: JWT_REFRESH_TOKEN_EXPIRATION_TIME,
        });
    }
    async signOut(userId) {
        try {
            await this.prismaService.token.deleteMany({
                where: {
                    userId: userId,
                    type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.REFRESH_TOKEN],
                },
            });
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
    async handleForgotPasswordCode(email) {
        const user = await this.usersService.findOneByEmail(email);
        const deleteOldToken = this.prismaService.token.deleteMany({
            where: {
                userId: user.id,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.RESET_TOKEN],
            },
        });
        const token = this.getRndCode();
        const saveToken = this.prismaService.token.create({
            data: {
                user: {
                    connect: user,
                },
                token: token.toString(),
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.RESET_TOKEN],
                expiresAt: getResetCodeExpiry(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });
        this.prismaService.$transaction([deleteOldToken, saveToken]).then(() => {
            this.mailService.sendResetPasswordSecret(email, token);
        });
    }
    getRndCode() {
        return Math.floor(Math.random() * (1000000 - 100000)) + 100000;
    }
    async checkResetCode(email, code) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('No user found');
        const foundToken = await this.prismaService.token.findUnique({
            where: {
                token_type: {
                    token: code.toString(),
                    type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.RESET_TOKEN],
                },
            },
        });
        if (!foundToken) {
            throw new common_1.NotFoundException('Your token is wrong');
        }
        else if (foundToken.expiresAt < new Date()) {
            throw new common_1.NotFoundException('Your token is expired');
        }
        const deletedToken = await this.prismaService.token.delete({
            where: foundToken,
        });
        if (deletedToken) {
            return await true;
        }
        else
            return await false;
    }
    async checkUrlToken(token) {
        try {
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
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async handleResetPasswordUrl(email) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('No user found');
        const urlToken = (0, crypto_1.randomUUID)();
        const deleteOldToken = this.prismaService.token.deleteMany({
            where: {
                userId: user.id,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.URL_TOKEN],
            },
        });
        const createToken = this.prismaService.token.create({
            data: {
                user: {
                    connect: user,
                },
                token: urlToken,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.URL_TOKEN],
                expiresAt: getResetCodeExpiry(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            select: {
                token: true,
            },
        });
        return this.prismaService
            .$transaction([deleteOldToken, createToken])
            .then(() => {
            return urlToken;
        });
    }
    async checkPwd(email, pwd) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('No user found');
        const isMatch = await bcrypt.compare(pwd, user.password);
        if (!isMatch) {
            throw new common_1.NotFoundException('Wrong password');
        }
        const urlToken = (0, crypto_1.randomUUID)();
        const deleteOldToken = this.prismaService.token.deleteMany({
            where: {
                userId: user.id,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.URL_TOKEN],
            },
        });
        const createToken = this.prismaService.token.create({
            data: {
                user: {
                    connect: user,
                },
                token: urlToken,
                type: token_type_enum_1.TokenType[token_type_enum_1.TokenType.URL_TOKEN],
                expiresAt: getResetCodeExpiry(),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            select: {
                token: true,
            },
        });
        return this.prismaService
            .$transaction([deleteOldToken, createToken])
            .then(() => {
            return urlToken;
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService,
        mail_sender_service_1.MailSenderService])
], AuthService);
//# sourceMappingURL=auth.service.js.map