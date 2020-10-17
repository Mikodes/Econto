import { assignObject } from "../../common/helpers/assign-object";

export class LoginResponse {
    accessToken: string;

    public static fromObject(object: Partial<LoginResponse>): LoginResponse {
        const loginResponse = new LoginResponse();

        assignObject<LoginResponse>(loginResponse, object, FIELDS);

        return loginResponse;
    }
}


const FIELDS = ['accessToken'];