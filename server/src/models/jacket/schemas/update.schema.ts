import { object } from '@hapi/joi';
import { BaseJacketSchema } from './base.schema';

export const UpdateJacketSchema = object({ ...BaseJacketSchema });