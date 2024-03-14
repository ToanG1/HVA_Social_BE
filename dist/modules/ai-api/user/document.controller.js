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
exports.DocumentController = void 0;
const common_1 = require("@nestjs/common");
const document_ai_api_service_1 = require("./document-ai-api.service");
let DocumentController = class DocumentController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    async getYoutubeSubsitles(videoId) {
        return this.documentService.getYoutubeSubsitles(videoId);
    }
    async summarizeDocument(document) {
        return this.documentService.summarizeDocument(document);
    }
};
exports.DocumentController = DocumentController;
__decorate([
    (0, common_1.Get)('subtitles'),
    __param(0, (0, common_1.Query)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getYoutubeSubsitles", null);
__decorate([
    (0, common_1.Post)('summarizes'),
    __param(0, (0, common_1.Body)('document')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "summarizeDocument", null);
exports.DocumentController = DocumentController = __decorate([
    (0, common_1.Controller)('ai/document'),
    __metadata("design:paramtypes", [document_ai_api_service_1.DocumentAiApiService])
], DocumentController);
//# sourceMappingURL=document.controller.js.map