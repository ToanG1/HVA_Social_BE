"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadmapAPIUtil = void 0;
const axios_1 = require("axios");
const RoadmapURL = 'http://127.0.0.1:5001/api';
class RoadmapAPIUtil {
    static async connect(api, method, data) {
        try {
            const url = `${RoadmapURL}/${api}`;
            const axiosConfig = {
                method,
                url,
                data,
            };
            const response = await (0, axios_1.default)(axiosConfig);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.RoadmapAPIUtil = RoadmapAPIUtil;
//# sourceMappingURL=roadmapAPI.util.js.map