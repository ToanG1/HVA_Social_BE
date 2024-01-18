import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { UpdatePostCommentDto } from './dto/update-post-comment.dto';
export declare class PostCommentService {
    create(createPostCommentDto: CreatePostCommentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostCommentDto: UpdatePostCommentDto): string;
    remove(id: number): string;
}
