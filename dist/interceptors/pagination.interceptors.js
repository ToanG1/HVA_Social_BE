"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const pagination_util_1 = require("../utils/pagination.util");
let PaginationInterceptor = class PaginationInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            const request = context.switchToHttp().getRequest();
            const page = parseInt(request.query.page, 10) || 1;
            const limit = parseInt(request.query.limit, 10) || 10;
            const paginatedData = pagination_util_1.PaginationUtil.paginate(data, page, limit);
            return {
                data: paginatedData,
                code: data.code,
                message: data.message,
                page,
                limit,
                totalItems: data.length,
            };
        }));
    }
};
exports.PaginationInterceptor = PaginationInterceptor;
exports.PaginationInterceptor = PaginationInterceptor = __decorate([
    (0, common_1.Injectable)()
], PaginationInterceptor);
//# sourceMappingURL=pagination.interceptors.js.map