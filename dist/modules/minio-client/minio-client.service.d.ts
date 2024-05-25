import 'multer';
export declare class MinioClientService {
    private minioClient;
    private bucketName;
    constructor();
    createBucketIfNotExists(): Promise<void>;
    uploadFile(file: Express.Multer.File): Promise<string>;
    getFileUrl(fileName: string): Promise<string>;
    deleteFile(fileName: string): Promise<void>;
}
