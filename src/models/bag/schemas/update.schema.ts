import { object } from '@hapi/joi';
import { BaseBagSchema } from './base.schema';

export const UpdateBagSchema = object({ ...BaseBagSchema });