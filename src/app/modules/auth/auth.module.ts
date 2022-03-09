import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CardFormComponent } from '$common/components/card-form/card-form.component';
import {MaterialModule} from '$app/material.module';
import { SignInComponent } from '$modules/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from '$modules/auth/components/sign-up/sign-up.component';
import { CognitoService } from '$app/services/cognito/cognito.service';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        AuthComponent,
        SignInComponent,
        SignUpComponent,
        CardFormComponent,
    ],
    providers: [CognitoService],
    imports: [
        AuthRoutingModule,
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule {
}
