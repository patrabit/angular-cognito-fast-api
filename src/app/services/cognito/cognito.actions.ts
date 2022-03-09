import {createAction} from '@ngrx/store';

export const cognitoSignIn = createAction('cognito/sign-in');
export const cognitoSignOut = createAction('cognito/sign-out');
