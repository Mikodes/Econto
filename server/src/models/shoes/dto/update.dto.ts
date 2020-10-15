import { Color, Gender } from "../../../common/constants";

export class UpdateShoesRequest implements Readonly<UpdateShoesRequest> {
    name: string;

    price: number;

    brand: string;

    size: number;

    color: Color;

    gender: Gender;
}