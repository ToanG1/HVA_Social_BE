"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostReplyCommentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_post_reply_comment_dto_1 = require("./create-post-reply-comment.dto");
class UpdatePostReplyCommentDto extends (0, mapped_types_1.PartialType)(create_post_reply_comment_dto_1.CreatePostReplyCommentDto) {
}
exports.UpdatePostReplyCommentDto = UpdatePostReplyCommentDto;
//# sourceMappingURL=update-post-reply-comment.dto.js.map