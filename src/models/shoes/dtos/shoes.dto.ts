import { IsUUID } from "class-validator";
import { Shoes } from "../entities/shoes.entity";
import { CreateShoesDto } from "./create.dto";

export class ShoesDto extends CreateShoesDto implements Readonly<ShoesDto> {
    @IsUUID()
    id: string;

    public static from(object: Partial<ShoesDto>): ShoesDto {
        const shoesDto = new ShoesDto();

        shoesDto.id = object.id;
        shoesDto.name = object.name;
        shoesDto.price = object.price;
        shoesDto.brand = object.brand;
        shoesDto.size = object.size;
        shoesDto.color = object.color;
        shoesDto.gender = object.gender;

        return shoesDto;
    }

    public static fromEntity(entity: Shoes): ShoesDto {
        return this.from({
            id: entity.id,
            name: entity.name,
            price: entity.price,
            brand: entity.brand,
            size: entity.size,
            color: entity.color,
            gender: entity.gender
        });
    }

    public toEntity(): Shoes {
        const entity = new Shoes();

        entity.name = this.name;
        entity.price = this.price;
        entity.brand = this.brand;
        entity.size = this.size;
        entity.color = this.color;
        entity.gender = this.gender;

        return entity;
    }
}