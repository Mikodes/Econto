import { string, number } from '@hapi/joi';
import { Color, Gender } from '../../../common/constants';

export const BaseShoesSchema = {
    name: string().min(1).max(32).required(),
    price: number().min(0).max(9999).required(),
    brand: string().min(1).max(32).required(),
    size: number().min(30).max(50).required(),
    color: string().valid(Color.BLACK, Color.BLUE, Color.GRAY, Color.GREEN, Color.RED, Color.WHITE).required(),
    gender: string().valid(Gender.KIDS, Gender.MEN, Gender.WOMEN).required()
};