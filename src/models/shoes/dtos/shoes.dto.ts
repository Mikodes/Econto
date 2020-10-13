import { IsEnum, IsNumber, IsString, IsUUID } from "class-validator";
import { Color, Gender } from "../../../common/constants";
import { Shoes } from "../entities/shoes.entity";

export class ShoesResponse implements Readonly<ShoesResponse> {
    @IsUUID()
    id: string;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    brand: string;

    @IsNumber()
    size: number;

    @IsEnum(Color)
    color: Color;

    @IsEnum(Gender)
    gender: Gender;
    
    public static fromObject(object: Partial<ShoesResponse>): ShoesResponse {
        const shoesResponse = new ShoesResponse();

        shoesResponse.id = object.id;
        shoesResponse.name = object.name;
        shoesResponse.price = object.price;
        shoesResponse.brand = object.brand;
        shoesResponse.size = object.size;
        shoesResponse.color = object.color;
        shoesResponse.gender = object.gender;

        return shoesResponse;
    }

    public toEntity(): Shoes {
        const entity = new Shoes();

        entity.id = this.id;
        entity.name = this.name;
        entity.price = this.price;
        entity.brand = this.brand;
        entity.size = this.size;
        entity.color = this.color;
        entity.gender = this.gender;

        return entity;
    }
}