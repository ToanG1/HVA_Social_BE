"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdManagementDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ad_management_dto_1 = require("./create-ad-management.dto");
class UpdateAdManagementDto extends (0, mapped_types_1.PartialType)(create_ad_management_dto_1.CreateAdManagementDto) {
}
exports.UpdateAdManagementDto = UpdateAdManagementDto;
//# sourceMappingURL=update-ad-management.dto.js.map