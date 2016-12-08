import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserAuth, UserProfile, User } from '../models';
import {AuthService} from 'ng2-ui-auth'; // Satellizer
/**
 * Removing Facebook SDK and integrating Satellizer
 * Keeping code for future reference
 */
// import { FacebookSDK } from '../sdk/facebook.sdk';

/**
 * @class FacebookService:
 * 
 * Facebook Service
 * Used to Login, Logout, Retrive User details and etc..
 * operation that can be carried out on facebook api and facebook graph Api.
 */
@Injectable()
export class FacebookService {
  
  /**
   * @constructor
   * Initializer AuthService of satellier for authenticating
   * different providers. 
   */
  constructor(private auth: AuthService) { }

    /**
     * @method login
     * 
     * To login to user's Account using Satellizer
     * 
     * @return { Observable<any> } Onservabe of satellier auth of
     * different providers depening on signInType.
     * 
     * e.g: facebook  
     * 
     */
    login(signInType): Observable<any> {
      if(signInType === 'facebook'){
        return this.auth.authenticate('facebook');
      } else if(signInType === 'instagram'){
        return this.auth.authenticate('instagram');
      }
    }

    /**
     * @method logout
     * 
     * To Logout user from the server by removig the access_token
     * stored in localStorage of a browser.
     * 
     */
    logout(): Observable<any> {
      return Observable.of(localStorage.removeItem('access_token'));
    }
}
