import { Color } from "../../../common/constants";

export class BaseBagDto implements Readonly<BaseBagDto> {
    name: string;

    price: number;

    brand: string;

    color: Color;
}