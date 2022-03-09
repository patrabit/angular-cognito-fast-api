import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CognitoGuard } from '$services/cognito/cognito.guard';
import { CognitoService } from '$services/cognito/cognito.service';
import { DeskComponent } from '$modules/desk/desk.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'desk',
    component: DeskComponent,
    canActivate: [CognitoGuard],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CognitoService]
})
export class AppRoutingModule { }
