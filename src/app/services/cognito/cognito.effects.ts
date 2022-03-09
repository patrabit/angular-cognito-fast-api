import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, ofType, tap, createEffect} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { cognitoSignIn, cognitoSignOut } from './cognito.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store
    ) {

    }

    authorized$ = createEffect(
        () => this.actions$.pipe(
            ofType(cognitoSignIn),
            tap(() => this.router.navigate(['/app']))
    ));

    signOut$ = createEffect(
        () => this.actions$.pipe(
            ofType(cognitoSignOut),
            tap(() => this.router.navigate(['/sign-in']))
    ));
}