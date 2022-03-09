import { UserData } from "amazon-cognito-identity-js";

export interface CognitoState {
    isLoggedIn: boolean;
    userData?: UserData;
}

