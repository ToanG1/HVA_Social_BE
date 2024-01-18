"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./user/auth.service");
const auth_controller_1 = require("./user/auth.controller");
const auth_admin_controller_1 = require("./admin/auth.admin.controller");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const mail_sender_service_1 = require("../mail-sender/mail-sender.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService, prisma_service_1.PrismaService, mail_sender_service_1.MailSenderService],
        controllers: [auth_controller_1.AuthController, auth_admin_controller_1.AuthAdminController],
        imports: [
            user_module_1.UserModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '30m' },
            }),
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map