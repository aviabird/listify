import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserAuth, UserProfile, User } from '../models';
import * as firebase from "firebase";
import { Http, Headers } from '@angular/http';

var BASE_URL: string ='http://127.0.0.1:3000/api'
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
  constructor(private http: Http) {
    var config = {
      apiKey: "AIzaSyB_0Z6nSJSdCLY7CbjvcLKAFBLJ45Nb3_Y",
      authDomain: "istalk-5ec3f.firebaseapp.com",
      databaseURL: "https://istalk-5ec3f.firebaseio.com",
      storageBucket: "istalk-5ec3f.appspot.com",
      messagingSenderId: "211546852493",
    };
    firebase.initializeApp(config);
  }

  signUp() {
    var provider = new firebase.auth.TwitterAuthProvider();
    return Observable.create(observer => {
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log("user is:", result.user)
        const userAuth = new UserAuth(
          result.user.providerData[0]['uid'],
          result.credential.accessToken,
          result.credential.secret)

        observer.next(userAuth);
      })
    });
 }

 loginServer(userAuth: UserAuth) {
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post("http://127.0.0.1:3000/api/auth/sign_in",
                          JSON.stringify(userAuth),
                          {headers: headers})
            .map(response =>{
              var token = response.json().token
              var newUserAuth = new UserAuth(userAuth.user_id, 
                                  userAuth.access_token,
                                  userAuth.secret_token,
                                  token)
              return newUserAuth;
            } )
 }

  login(): Observable<any> {
    var provider = new firebase.auth.TwitterAuthProvider();
    
    return Observable.create(observer => {
      firebase.auth().signInWithPopup(provider).then(result => {
        console.log("user is:", result)
        const userAuth = new UserAuth(
          result.user.providerData[0]['uid'],
          result.credential.accessToken,
          result.credential.secret)
        observer.next(userAuth);
      })
    });
  }

  logout(): Observable<any> {
      return Observable.of(localStorage.removeItem('access_token'));
  }

  storeUsertoBackend(payload){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://127.0.0.1:3000/api/auth/sign_up",
                          JSON.stringify(payload),
                          {headers: headers})
            .map(response =>{
              var token = response.json().token
              var userAuth = payload.userAuth
              var newUserAuth = new UserAuth(userAuth.user_id, userAuth.access_token, userAuth.secret_token, token)
              return newUserAuth;
            } )
  }

  followList(listName, usernames, token) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    var payload = { name: listName, usernames: usernames }
    return this.http.post("http://127.0.0.1:3000/api/lists/create",
      JSON.stringify(payload),
      {headers: headers})
      .subscribe(response => {
        console.log(response)
      })

  }
}
