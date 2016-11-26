import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import * as fromUserAuth from '../reducers/user-auth';
import 'rxjs'
@Injectable()
export class UserAuthService {
  userAuth: Observable<fromUserAuth.State>;

  constructor(
    public af: AngularFire
  ) {
    this.userAuth = this.af.auth.map(
      user => this.changeState(user),
      error => console.trace(error)
    );
  };

  login(provider) {
    console.log("Inside Service Login FUnc");
    this.af.auth.login({
      provider: this.getProvider(provider)
    });
    return this.userAuth
  }

  logout() {
    this.af.auth.logout();
    return this.userAuth;
  }

  authStatus() {
    return this.userAuth;
  }

  private changeState(user: any = null) {
    if(user) {
      return {
        user: this.getUserInfo(user),
        isAuthenticated: true
      }
    }
    else {
      return {
        user: null,
        isAuthenticated: false
      }
    }
  }

  private getUserInfo(user: any): any {
    if(!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

  private getProvider(from: String) {
    switch(from){
      case 'twitter': return AuthProviders.Twitter;
      case 'facebook': return AuthProviders.Facebook;
      case 'github': return AuthProviders.Github;
      case 'google': return AuthProviders.Google;
    }
  }
}