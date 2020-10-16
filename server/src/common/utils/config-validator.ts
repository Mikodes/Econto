import { object, string, number } from '@hapi/joi';
import { red } from 'chalk';
import config from '../../config';

export class ConfigValidator {
    public validate(): boolean {
        try {
            const validationSchema = this.getValidationSchema();
            validationSchema.validate(config);
        } catch(error) {
            this.printErrorMessage(error);
            return false;
        }
    }

    private getValidationSchema() {
        return object({
            APP: {
                MODE: string().valid('development', 'production', 'test'),
                PREFIX: string(),
                PORT: number().min(80).max(10000)
            },
            AUTH: {
                SECRET: string().min(10)
            },
            DATABASE: {
                DATABASE_NAME: string().min(1),
                DATABASE_HOST: string().ip(),
                PASSWORD: string().min(1),
                PORT: number().min(80).max(10000),
                USER: string().min(1)
            }
        });
    }

    private printErrorMessage(message: string): void {
        console.log(red(message));
    }
}