import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserAuth, UserProfile, User } from '../models';
import * as firebase from "firebase";

/**
 * @class UserAuthService:
 * 
 * Auth Service
 * Used to Login, Logout, Retrive User details and etc..
 * operation that can be carried out on provider API.
 */
@Injectable()
export class UserAuthService {
  
  /**
   * @constructor
   */
  constructor() {
    var config = {
      apiKey: "AIzaSyB_0Z6nSJSdCLY7CbjvcLKAFBLJ45Nb3_Y",
      authDomain: "istalk-5ec3f.firebaseapp.com",
      databaseURL: "https://istalk-5ec3f.firebaseio.com",
      storageBucket: "istalk-5ec3f.appspot.com",
      messagingSenderId: "211546852493",
    };
    firebase.initializeApp(config);
  }
  
  login(): Observable<any> {
    var provider = new firebase.auth.TwitterAuthProvider();
    
    return Observable.create(observer => {
      firebase.auth().signInWithPopup(provider).then(result => {
        
        const userAuth = new UserAuth(
          result.credential.accessToken,
          result.credential.secret)
        
        observer.next(userAuth);
      })
    });
  }

  logout(): Observable<any> {
      return Observable.of(localStorage.removeItem('access_token'));
  }
}
