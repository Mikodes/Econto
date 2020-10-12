import { Color, Gender } from "../../constants";

export interface IShoes {
    name: string;
    brand: string;
    gender: Gender;
    size: number;
    color: Color;
    price: number;
}