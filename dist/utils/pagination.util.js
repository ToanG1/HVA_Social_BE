"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationUtil = void 0;
class PaginationUtil {
    static paginate(data, page, limit) {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        return data.slice(startIndex, endIndex);
    }
}
exports.PaginationUtil = PaginationUtil;
//# sourceMappingURL=pagination.util.js.map