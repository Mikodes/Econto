import { object } from '@hapi/joi';
import { BaseShoesSchema } from './base.schema';

export const CreateShoesSchema = object({ ...BaseShoesSchema });