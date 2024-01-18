import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
export declare class FriendshipsService {
    create(createFriendshipDto: CreateFriendshipDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFriendshipDto: UpdateFriendshipDto): string;
    remove(id: number): string;
}
