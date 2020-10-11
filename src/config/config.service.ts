import 'dotenv/config';

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) {}

    private getValue(key: string, throwOnMissing: boolean = true): string {
        const value = this.env[key];

        if(!value && throwOnMissing) {
            throw new Error(`Config erorr - missing env.${key}`);
        }

        return value;
    }

    //TODO: Change to more meaningful name (Strange return type according to name)
    public ensureValues(keys: string[]): ConfigService {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort(): string {
        return this.getValue('PORT', true);
    }
}