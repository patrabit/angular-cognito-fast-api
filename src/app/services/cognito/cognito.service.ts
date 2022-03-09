import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool, CognitoUserSession } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

const POOL_DATA = {
  UserPoolId: environment.awsCognitoUserPoolId,
  ClientId: environment.awsCognitoAppClientId
}

@Injectable({
  providedIn: 'root'
})

export class CognitoService {
  user?: CognitoUser;

  getUserPool(): CognitoUserPool {
    return new CognitoUserPool(POOL_DATA);
  }

  signIn(email: string, password: string): Observable<CognitoUserSession> {
    const userPool = this.getUserPool();
    const details = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    this.user = new CognitoUser({
      Username: email,
      Pool: userPool
    });

    return new Observable(observer => {
      this.user?.authenticateUser(details, {
        onSuccess: (result: CognitoUserSession) => {
          observer.next(result);
          observer.complete();
        },
        onFailure: (err) => {
          observer.error(err);
        }
      });
    });
  }
  signUp(email: string, password: string, attributes: CognitoUserAttribute[]): Observable<any> {
    const userPool = this.getUserPool();

    const attributeList = attributes.map(
      attribute => new CognitoUserAttribute(attribute)
    );
    
    return new Observable(observer => {
      userPool.signUp(email, password, attributeList, [], (err, result) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(result);
          observer.complete();
        }
      });
    })
    }

  signUpConfirm(username: string, code: string): Observable<any> {
    const userData = {
      Username: username,
      Pool: this.getUserPool()
    };
    this.user = new CognitoUser(userData);
    return new Observable(observer => {
      this.user?.confirmRegistration(code, true, (err, result) => {
        if (err) {
          return observer.error(err);
        }
        observer.next(result);
      });
    });
  }

  signOut(): void {
    const user: CognitoUser | null = this.getUserPool().getCurrentUser();
    if (user !== null) {
      user.signOut();
    }
  }

  isSessionValid(): Observable<boolean> {
    const user: CognitoUser | null = this.getUserPool().getCurrentUser();

    if (!user) return of(false);
    return new Observable(observer => {
      user.getSession((err: any, session: CognitoUserSession) => {
        if (err) {
          return observer.error(err);
        }
        observer.next(session.isValid());
      });
    });
  }
}
