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
exports.AuthAdminController = void 0;
const common_1 = require("@nestjs/common");
const login_dto_1 = require("../authDto/login.dto");
const auth_service_1 = require("../user/auth.service");
const adminAuth_guard_1 = require("../../../guard/adminAuth.guard");
let AuthAdminController = class AuthAdminController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(signInDto) {
        if (await this.authService.isUserAdmin(signInDto.email))
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
    async checkAdmin() {
        return true;
    }
};
exports.AuthAdminController = AuthAdminController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthAdminController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthAdminController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)('logout'),
    (0, common_1.UseGuards)(adminAuth_guard_1.AdminAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthAdminController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('check-admin'),
    (0, common_1.UseGuards)(adminAuth_guard_1.AdminAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthAdminController.prototype, "checkAdmin", null);
exports.AuthAdminController = AuthAdminController = __decorate([
    (0, common_1.Controller)('admin/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthAdminController);
//# sourceMappingURL=auth.admin.controller.js.map