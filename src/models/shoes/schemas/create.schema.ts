import { object, string, number } from '@hapi/joi';
import { Color, Gender } from 'src/common/constants';

export const CreateShoesSchema = object({
    name: string().min(1).max(32).required(),
    price: number().min(0).max(9999).required(),
    brand: string().min(1).max(32).required(),
    size: string().min(30).max(50).required(),
    color: string().valid(Color).required(),
    gender: string().valid(Gender).required()
});