import { CreatePostReplyCommentDto } from './dto/create-post-reply-comment.dto';
import { UpdatePostReplyCommentDto } from './dto/update-post-reply-comment.dto';
export declare class PostReplyCommentService {
    create(createPostReplyCommentDto: CreatePostReplyCommentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostReplyCommentDto: UpdatePostReplyCommentDto): string;
    remove(id: number): string;
}
