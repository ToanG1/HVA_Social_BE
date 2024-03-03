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
exports.DocumentAiApiService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const ai_url_constant_1 = require("../ai-url.constant");
let DocumentAiApiService = class DocumentAiApiService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getYoutubeSubsitles(videoId) {
        const { data } = await this.httpService.axiosRef.get(`${ai_url_constant_1.AI_URL}/subtitle?videoId=${videoId}`);
        return data.subtitles;
    }
    async summarizeDocument(text) {
        const { data } = await this.httpService.axiosRef.post(`${ai_url_constant_1.AI_URL}/summarize`, {
            document: text,
        });
        if (data.code === 200)
            return data.response;
        return "There's some problem with server, please try again later";
    }
};
exports.DocumentAiApiService = DocumentAiApiService;
exports.DocumentAiApiService = DocumentAiApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DocumentAiApiService);
//# sourceMappingURL=document-ai-api.service.js.map