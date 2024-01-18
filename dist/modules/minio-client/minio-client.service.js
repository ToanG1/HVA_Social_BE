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
exports.MinioClientService = void 0;
const common_1 = require("@nestjs/common");
const Minio = require("minio");
let MinioClientService = class MinioClientService {
    constructor() {
        this.minioClient = new Minio.Client({
            endPoint: process.env.MINIO_ENDPOINT,
            port: Number(process.env.MINIO_PORT),
            useSSL: false,
            accessKey: process.env.MINIO_ACCESSKEY,
            secretKey: process.env.SECRETKEY,
        });
        this.bucketName = process.env.MINIO_BUCKET;
    }
    async createBucketIfNotExists() {
        const bucketExists = await this.minioClient.bucketExists(this.bucketName);
        if (!bucketExists) {
            await this.minioClient.makeBucket(this.bucketName, 'eu-west-1');
        }
    }
    async uploadFile(file) {
        const fileName = `${process.env.IMAGE_PATH}${Date.now()}-${file.originalname}`;
        await this.minioClient.putObject(this.bucketName, fileName, file.buffer, file.size);
        return process.env.MINIO_BUCKET + '/' + fileName;
    }
    async getFileUrl(fileName) {
        return await this.minioClient.presignedUrl('GET', this.bucketName, process.env.IMAGE_PATH + fileName);
    }
    async deleteFile(fileName) {
        await this.minioClient.removeObject(this.bucketName, process.env.IMAGE_PATH + fileName);
    }
};
exports.MinioClientService = MinioClientService;
exports.MinioClientService = MinioClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MinioClientService);
//# sourceMappingURL=minio-client.service.js.map