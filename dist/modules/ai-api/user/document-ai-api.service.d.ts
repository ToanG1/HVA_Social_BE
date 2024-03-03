import { HttpService } from '@nestjs/axios';
export declare class DocumentAiApiService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getYoutubeSubsitles(videoId: string): Promise<any>;
    summarizeDocument(text: string): Promise<any>;
}
