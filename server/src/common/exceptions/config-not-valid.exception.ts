export class ConfigNotValidException extends Error {
    public constructor(variableName: string) {
        super()

        this.message = `Environment variable "${variableName}" does not exist or is invalid`;
    }
}