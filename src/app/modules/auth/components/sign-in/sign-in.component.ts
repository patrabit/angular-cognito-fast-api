import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  email: string = "";
  password: string = "";
  pending: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSignIn(form: NgForm) {
    if (!form.valid || this.pending) return;
    this.pending = true;
    const userPool = new CognitoUserPool({
      UserPoolId: environment.awsCognitoUserPoolId,
      ClientId: environment.awsCognitoAppClientId
    });
    const cognitoUser = new CognitoUser({
      Username: this.email, 
      Pool: userPool
    });
    cognitoUser.authenticateUser(new AuthenticationDetails({
      Username: this.email,
      Password: this.password,      
    }), {
      onSuccess: (result) => {
        this.router.navigate(["desk"])
      },
      onFailure: (err) => {
        alert(err.message || JSON.stringify(err));
        this.pending = false;
      },
    });
  }
}