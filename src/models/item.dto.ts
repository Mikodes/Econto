import { IsString, IsUUID } from 'class-validator';
import { Item } from './item.entity';

export class ItemDTO implements Readonly<ItemDTO> {
    @IsUUID()
    id: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    public static from(dto: Partial<ItemDTO>) {
        const it = new ItemDTO();
        it.id = dto.id;
        it.name = dto.name;
        it.description = dto.description;
        return it;
    }

    public static fromEntity(entity: Item) {
        return this.from({
        id: entity.id,
        name: entity.name,
        description: entity.description
        });
    }

    public toEntity() {
        const it = new Item();
        it.id = this.id;
        it.name = this.name;
        it.description = this.description;
        it.createDateTime = new Date();
        return it;
    }
}