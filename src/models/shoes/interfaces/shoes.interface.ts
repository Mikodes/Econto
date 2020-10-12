import { Color, Gender } from "../../constants";

export interface IShoes {
    name: string;
    price: number;
    brand: string;
    size: number;
    color: Color;
    gender: Gender;
}