"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadmapAPI = void 0;
const axios_1 = require("@nestjs/axios");
class RoadmapAPI {
}
exports.RoadmapAPI = RoadmapAPI;
() => {
    httpService: axios_1.HttpService,
    ;
    const { data } = await this.httpService.axiosRef.get(`${AI_URL}/init`);
};
//# sourceMappingURL=hva-roadmap-connec.util.js.map