/// <reference types="Multer" />
import { MinioClientService } from './minio-client.service';
export declare class MinioClientController {
    private readonly minioService;
    constructor(minioService: MinioClientService);
    uploadImage(file: Express.Multer.File): Promise<{
        url: string;
    }>;
    getImage(fileName: string): Promise<{
        url: string;
    }>;
    deleteImage(fileName: string): Promise<string>;
}
