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
exports.CreatePostCommentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePostCommentDto {
}
exports.CreatePostCommentDto = CreatePostCommentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'content (in html) of the post commet',
        example: '<h1>hello</h1>',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostCommentDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'post id',
        example: 1,
        type: Number,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostCommentDto.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'link image of post',
        example: 'link image of post',
        required: true,
        type: String,
    }),
    __metadata("design:type", Array)
], CreatePostCommentDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'link video of post',
        example: 'link video of post',
        required: true,
        type: String,
    }),
    __metadata("design:type", Array)
], CreatePostCommentDto.prototype, "video", void 0);
//# sourceMappingURL=create-post-comment.dto.js.map