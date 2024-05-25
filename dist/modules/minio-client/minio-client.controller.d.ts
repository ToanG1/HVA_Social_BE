import { MinioClientService } from './minio-client.service';
import 'multer';
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
