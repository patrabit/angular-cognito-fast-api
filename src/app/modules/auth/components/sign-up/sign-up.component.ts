
import { Component, OnInit } from '@angular/core';
import { CognitoUserPool,CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

interface SignUpFormData {
  username: string;
  email: string;
  [key: string]: string;
};

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  pending: boolean = false;
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {

  }
  
  onSignup(form: NgForm){
    if (!form.valid) return;
    this.pending = true;
    const userPool = new CognitoUserPool({
      UserPoolId: environment.awsCognitoUserPoolId,
      ClientId: environment.awsCognitoAppClientId
    });
    const formData: SignUpFormData = {
      username: this.username,
      email: this.email,
    }
    const attributeList = [];
    
    for (let key  in formData) {
      const attribute = new CognitoUserAttribute({
        Name: key,
        Value: formData[key]
      });
      attributeList.push(attribute)
    }
    userPool.signUp(this.email, this.password, attributeList, [], (
      err,
      result
      ) => {
        this.pending = false;
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        this.router.navigate(['/signin']);
      });
    }
  }