import { DocumentAiApiService } from './document-ai-api.service';
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentAiApiService);
    getYoutubeSubsitles(videoId: string): Promise<any>;
    summarizeDocument(document: string): Promise<any>;
}
