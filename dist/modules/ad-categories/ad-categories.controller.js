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
exports.AdCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const ad_categories_service_1 = require("./ad-categories.service");
const create_ad_category_dto_1 = require("./dto/create-ad-category.dto");
const update_ad_category_dto_1 = require("./dto/update-ad-category.dto");
let AdCategoriesController = class AdCategoriesController {
    constructor(adCategoriesService) {
        this.adCategoriesService = adCategoriesService;
    }
    create(createAdCategoryDto) {
        return this.adCategoriesService.create(createAdCategoryDto);
    }
    findAll() {
        return this.adCategoriesService.findAll();
    }
    findOne(id) {
        return this.adCategoriesService.findOne(+id);
    }
    update(id, updateAdCategoryDto) {
        return this.adCategoriesService.update(+id, updateAdCategoryDto);
    }
    remove(id) {
        return this.adCategoriesService.remove(+id);
    }
};
exports.AdCategoriesController = AdCategoriesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ad_category_dto_1.CreateAdCategoryDto]),
    __metadata("design:returntype", void 0)
], AdCategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdCategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdCategoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ad_category_dto_1.UpdateAdCategoryDto]),
    __metadata("design:returntype", void 0)
], AdCategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdCategoriesController.prototype, "remove", null);
exports.AdCategoriesController = AdCategoriesController = __decorate([
    (0, common_1.Controller)('ad-categories'),
    __metadata("design:paramtypes", [ad_categories_service_1.AdCategoriesService])
], AdCategoriesController);
//# sourceMappingURL=ad-categories.controller.js.map