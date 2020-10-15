import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthConfigService {
    constructor(private readonly _configService: ConfigService) {}
    
    get secret(): string {
        return this._configService.get<string>('auth.secret');
    }
}