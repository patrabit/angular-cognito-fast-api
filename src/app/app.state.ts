import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import { CognitoState } from './services/cognito/cognito.models';
import {cognitoFeatureKey, cognitoReducer} from '$services/cognito/cognito.reducer';

import {DeskState} from '$services/desk/desk.models';
import {deskFeatureKey, deskReducer} from '$services/desk/desk.reducer';



export const reducers: ActionReducerMap<AppState> = {
    auth: cognitoReducer,
    desk: deskReducer,
};

export const selectDeskState = createFeatureSelector<DeskState>(deskFeatureKey);
export const selectCognitoState = createFeatureSelector<CognitoState>(cognitoFeatureKey);


export interface AppState {
    auth: CognitoState;
    desk: DeskState;
}
