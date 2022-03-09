import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CognitoService } from './cognito.service';

@Injectable({
  providedIn: 'root'
})
export class CognitoGuard implements CanActivate {
  constructor(private router: Router, private cognitoService: CognitoService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = this.cognitoService.isSessionValid()
    return true;
    if (!isAuth) {
      this.router.navigate(['sign-in']);
    }  
    return isAuth;
  }
  
}
