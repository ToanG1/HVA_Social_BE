import { FriendshipsService } from './friendships.service';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
export declare class FriendshipsController {
    private readonly friendshipsService;
    constructor(friendshipsService: FriendshipsService);
    create(createFriendshipDto: CreateFriendshipDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFriendshipDto: UpdateFriendshipDto): string;
    remove(id: string): string;
}
