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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const createUser_dto_1 = require("../../user/userDTO/createUser.dto");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("../authDTO/login.dto");
const auth_guard_1 = require("../../../guard/auth.guard");
const user_service_1 = require("../../user/user/user.service");
const notifications_service_1 = require("../../notifications/notifications.service");
let AuthController = class AuthController {
    constructor(authService, userService, notificationService) {
        this.authService = authService;
        this.userService = userService;
        this.notificationService = notificationService;
    }
    async signUp(signUpDto) {
        return this.authService.signUp(signUpDto);
    }
    async activate(activationToken) {
        if (!activationToken)
            throw new common_1.NotFoundException('Activation code not found');
        return this.authService.activate(activationToken);
    }
    async login(signInDto) {
        return this.authService.login(signInDto);
    }
    refreshToken(refreshToken) {
        if (refreshToken) {
            return this.authService.refresh(refreshToken);
        }
        else
            throw new common_1.UnauthorizedException('Refresh token is required');
    }
    logout(req) {
        return this.authService.signOut(req.user.sub);
    }
    async pwdReset(email) {
        await this.authService.handleForgotPasswordCode(email);
    }
    async CheckPwdResetCode(email, code) {
        if (await this.authService.checkResetCode(email, code))
            return this.authService.handleResetPasswordUrl(email);
        return null;
    }
    resetPassword(token, pwd) {
        return this.userService.changePassword(token, pwd);
    }
    checkUrlToken(token) {
        return this.authService.checkUrlToken(token);
    }
    authenticate() {
        return true;
    }
    changePassword(pwd, req) {
        return this.authService.checkPwd(req.user.email, pwd);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('activate'),
    __param(0, (0, common_1.Query)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activate", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('forgot-pwd'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "pwdReset", null);
__decorate([
    (0, common_1.Post)('check-reset-code'),
    __param(0, (0, common_1.Query)('email')),
    __param(1, (0, common_1.Query)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "CheckPwdResetCode", null);
__decorate([
    (0, common_1.Post)('reset-pwd/:token'),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)('pwd')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('check-url-token'),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkUrlToken", null);
__decorate([
    (0, common_1.Get)('authenticate'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "authenticate", null);
__decorate([
    (0, common_1.Post)('change-pwd'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)('pwd')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        notifications_service_1.NotificationsService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map