import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CognitoUserPool, UserData } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { selectIsLoggedIn, selectUserData } from '$services/cognito/cognito.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'studio-desk';
  showCover: boolean = false;
  isLoggedIn: boolean = false;
  userInfo: UserData | null = null;

  constructor(private router: Router, private store: Store) { }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.showCover = ['/', '/sign-in', '/sign-up'].some(path => path.includes(this.router.url))
      }
    });

    this.store.pipe(select(selectIsLoggedIn)).subscribe((isLogged: boolean) => {
      this.isLoggedIn = isLogged;
    });

    this.store.pipe(select(selectUserData)).subscribe((userInfo: any) => {
      this.userInfo = userInfo;
    });
  }

  onLogout(): void {
    const userPool = new CognitoUserPool({
      UserPoolId: environment.awsCognitoUserPoolId,
      ClientId: environment.awsCognitoAppClientId
    });
    const cognitoUser = userPool.getCurrentUser();
    cognitoUser?.signOut();
    this.router.navigate(["sign-in"])
  }
}
