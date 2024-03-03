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
exports.NSFWApiService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const ai_url_constant_1 = require("../ai-url.constant");
const prisma_service_1 = require("../../prisma/prisma.service");
const function_code_enum_1 = require("../../../utils/enums/function-code.enum");
let NSFWApiService = class NSFWApiService {
    constructor(httpService, prismaService) {
        this.httpService = httpService;
        this.prismaService = prismaService;
    }
    async checkNSFWContent(checkNSFWDto) {
        const { data } = await this.httpService.axiosRef.post(`${ai_url_constant_1.AI_URL}/check-nsfw?type=${checkNSFWDto.type}&priority=${checkNSFWDto.priority}`, { content: checkNSFWDto.content });
        if (data.isViolated)
            await this.prismaService.violationSC.create({
                data: {
                    userId: checkNSFWDto.userId,
                    functionCode: function_code_enum_1.FunctionCode[checkNSFWDto.functionCode],
                    idObject: checkNSFWDto.idObject,
                    reason: JSON.stringify(data.reason),
                },
            });
        return {
            isBanned: data.isBanned,
            reproducedContent: data.reproducedContent,
        };
    }
};
exports.NSFWApiService = NSFWApiService;
exports.NSFWApiService = NSFWApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        prisma_service_1.PrismaService])
], NSFWApiService);
//# sourceMappingURL=nsfw-api.service.js.map