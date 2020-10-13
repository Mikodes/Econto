import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { Color, Gender } from "src/common/constants";
import { Shoes } from "../entities/shoes.entity";

export class ShoesDto implements Readonly<ShoesDto> {
    @IsUUID()
    id: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsNumber()
    @IsNotEmpty()
    size: number;

    @IsEnum(Color)
    @IsNotEmpty()
    color: Color;

    @IsEnum(Gender)
    @IsNotEmpty()
    gender: Gender;

    public static from(partialShoesDto: Partial<ShoesDto>) {
        const shoesDto = new ShoesDto();

        shoesDto.id = partialShoesDto.id;
        shoesDto.name = partialShoesDto.name;
        shoesDto.price = partialShoesDto.price;
        shoesDto.brand = partialShoesDto.brand;
        shoesDto.size = partialShoesDto.size;
        shoesDto.color = partialShoesDto.color;
        shoesDto.gender = partialShoesDto.gender;

        return shoesDto;
    }

    public static fromEntity(entity: Shoes) {
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