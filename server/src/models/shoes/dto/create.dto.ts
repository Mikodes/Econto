import { Color, Gender } from "../../../common/constants";

export class CreateShoesRequest implements Readonly<CreateShoesRequest> {
    name: string;

    price: number;

    brand: string;

    size: number;

    color: Color;

    gender: Gender;
}