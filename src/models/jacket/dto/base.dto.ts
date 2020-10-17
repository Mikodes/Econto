import { Color, Style } from "../../../common/constants";

export class BaseJacketDto implements Readonly<BaseJacketDto> {
    name: string;

    price: number;

    brand: string;

    style: Style;

    color: Color;
}