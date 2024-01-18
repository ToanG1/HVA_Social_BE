"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ad_category_dto_1 = require("./create-ad-category.dto");
class UpdateAdCategoryDto extends (0, mapped_types_1.PartialType)(create_ad_category_dto_1.CreateAdCategoryDto) {
}
exports.UpdateAdCategoryDto = UpdateAdCategoryDto;
//# sourceMappingURL=update-ad-category.dto.js.map