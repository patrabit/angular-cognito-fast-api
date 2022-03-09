import {createSelector} from '@ngrx/store';
import {selectCognitoState} from '$app/app.state';
import {CognitoState} from './cognito.models';

export const selectAuth = createSelector(
  selectCognitoState,
  (state: CognitoState) => state
);
export const selectIsLoggedIn = createSelector(
    selectCognitoState,
    (state: CognitoState) => {
      console.log(state);
      return state.isLoggedIn;
    } 
);

export const selectUserData = createSelector(
  selectCognitoState,
  (state: CognitoState) => state.userData
);