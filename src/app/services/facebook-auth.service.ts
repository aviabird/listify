import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// Angualr Fire for facebook Authentication
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

// Import User model
import { User } from '../models/user';

@Injectable()
export class FacebookAuthService {
  // user: any;
  constructor(public af: AngularFire) {
    // this.af.auth.subscribe(user => {
    //   console.log("In side constructor")
    //   if(user) {
    //     // user logged in
    //     this.user = user;
    //   }
    //   else {
    //     // user not logged in
    //     this.user = {};
    //   }
    // });
  }

  // Angular 2 Firebase Login
  login() {
      this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      }).then((success) => {
        console.log("Facebook success login", success);
      }).catch((error) => {
        console.info("error", error);
      });
  }
 
  // LogOut user
  logout() {
    this.af.auth.logout();
  }
}