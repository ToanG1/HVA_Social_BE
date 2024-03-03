import { HttpService } from '@nestjs/axios';
export declare class ChatAiApiService {
    private readonly httpService;
    constructor(httpService: HttpService);
    initChat(): Promise<any>;
    chat(dataObject: any): Promise<any>;
}
