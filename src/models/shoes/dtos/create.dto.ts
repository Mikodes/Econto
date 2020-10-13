import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Color, Gender } from "src/models/constants";
import { Shoes } from "../entities/shoes.entity";

export class CreateShoesDto implements Readonly<CreateShoesDto> {
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