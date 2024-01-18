"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFriendshipDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_friendship_dto_1 = require("./create-friendship.dto");
class UpdateFriendshipDto extends (0, mapped_types_1.PartialType)(create_friendship_dto_1.CreateFriendshipDto) {
}
exports.UpdateFriendshipDto = UpdateFriendshipDto;
//# sourceMappingURL=update-friendship.dto.js.map