import { PartialType } from '@nestjs/mapped-types';
import { CreatePostReplyCommentDto } from './create-post-reply-comment.dto';

export class UpdatePostReplyCommentDto extends PartialType(CreatePostReplyCommentDto) {}
