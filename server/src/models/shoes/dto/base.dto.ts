import { Color, Gender } from "../../../common/constants";

export class BaseShoesDto implements Readonly<BaseShoesDto> {
    name: string;

    price: number;

    brand: string;

    size: number;

    color: Color;

    gender: Gender;
}