import {Action, createReducer, on} from '@ngrx/store';
import {cognitoSignIn, cognitoSignOut} from './cognito.actions'
import {CognitoState} from './cognito.models';

export const cognitoFeatureKey = 'cognito';

export const initialState: CognitoState = {
    isLoggedIn: false,
    userData: undefined,
}
const reducer = createReducer(
    initialState,
    on(cognitoSignIn, (state) => ({...state, isLoggedIn: true})),
    on(cognitoSignOut, (state) => ({...state, isLoggedIn: false})),
)
    
export function cognitoReducer(
state: CognitoState | undefined,
action: Action
): CognitoState {
    return reducer(state, action);
}
