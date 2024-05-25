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
exports.MinioClientController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const minio_client_service_1 = require("./minio-client.service");
require("multer");
const auth_guard_1 = require("../../guard/auth.guard");
let MinioClientController = class MinioClientController {
    constructor(minioService) {
        this.minioService = minioService;
    }
    async uploadImage(file) {
        await this.minioService.createBucketIfNotExists();
        return { url: await this.minioService.uploadFile(file) };
    }
    async getImage(fileName) {
        const fileUrl = await this.minioService.getFileUrl(fileName);
        return { url: fileUrl };
    }
    async deleteImage(fileName) {
        await this.minioService.deleteFile(fileName);
        return 'delete successfully';
    }
};
exports.MinioClientController = MinioClientController;
__decorate([
    (0, common_1.Post)('image'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MinioClientController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)('image/:fileName'),
    __param(0, (0, common_1.Param)('fileName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MinioClientController.prototype, "getImage", null);
__decorate([
    (0, common_1.Delete)('image/:fileName'),
    __param(0, (0, common_1.Param)('fileName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MinioClientController.prototype, "deleteImage", null);
exports.MinioClientController = MinioClientController = __decorate([
    (0, common_1.Controller)('minio'),
    __metadata("design:paramtypes", [minio_client_service_1.MinioClientService])
], MinioClientController);
//# sourceMappingURL=minio-client.controller.js.map