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
exports.UserAdminController = void 0;
const common_1 = require("@nestjs/common");
const adminAuth_guard_1 = require("../../../../guard/adminAuth.guard");
const pagination_interceptors_1 = require("src/interceptors/pagination.interceptors");
const chart_fomarted_user_data_interceptors_1 = require("src/interceptors/chart-fomarted-user-data.interceptors");
const user_admin_service_1 = require("./user.admin.service");
const updateUser_dto_1 = require("../userDTO/updateUser.dto");
const mail_sender_service_1 = require("../../../mail-sender/mail-sender.service");
let UserAdminController = class UserAdminController {
    constructor(userService, userAdminService, mailSenderService) {
        this.userService = userService;
        this.userAdminService = userAdminService;
        this.mailSenderService = mailSenderService;
    }
    findAll() {
        return this.userService.findAll();
    }
    getChartData() {
        return this.userService.findAll();
    }
    async update(id, updateUserDto) {
        const owner = await this.userAdminService.findOneByAdmin(id);
        return this.userService.updateUser(id, updateUserDto).then((res) => {
            this.mailSenderService.sendNotificationEmail(owner.email, `User ${id} has been updated due to our policy`, `Your User with id ${id} has been updated due to our policy`, 'Contact our support team for more information');
            return res;
        });
    }
    async ban(id) {
        const owner = await this.userAdminService.findOneByAdmin(id);
        return this.userAdminService.ban(id).then((res) => {
            this.mailSenderService.sendNotificationEmail(owner.email, `User ${id} has been baned due to our policy`, `Your User with id ${id} has been baned due to our policy`, 'Contact our support team for more information');
            return res;
        });
    }
};
exports.UserAdminController = UserAdminController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(pagination_interceptors_1.PaginationInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('chart'),
    (0, common_1.UseInterceptors)(chart_fomarted_user_data_interceptors_1.ChartFormattedUserDataInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "getChartData", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateUser_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserAdminController.prototype, "ban", null);
exports.UserAdminController = UserAdminController = __decorate([
    (0, common_1.Controller)('api/admin/user'),
    (0, common_1.UseGuards)(adminAuth_guard_1.AdminAuthGuard),
    __metadata("design:paramtypes", [user_admin_service_1.UserAdminService,
        user_admin_service_1.UserAdminService,
        mail_sender_service_1.MailSenderService])
], UserAdminController);
//# sourceMappingURL=user.admin.controller.js.map