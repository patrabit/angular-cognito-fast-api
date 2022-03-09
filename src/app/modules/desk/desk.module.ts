import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '$app/material.module';

import {DeskRoutingModule} from './desk-routing.module';
import { DeskComponent } from './desk.component';

@NgModule({
    declarations: [
        DeskComponent,
    ],
    providers: [],
    imports: [
        BrowserModule,
        CommonModule,
        DeskRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeskModule {
}
