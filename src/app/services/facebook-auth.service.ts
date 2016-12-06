import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, UserProfile } from '../models';
import { FacebookSDK } from '../sdk/facebook.sdk';

/**
 * @class FacebookAuthService:
 * 
 * Facebook Auth Service
 * Used to Login, Logout, Retrive User details and etc..
 * operation that can be carried out on facebook api and facebook graph Api.
 */
@Injectable()
export class FacebookAuthService {
  
  /**
   * @constructor
   * @param FacebookSDK the SDK service which returns all
   * faccebook methods as a promise so we can convert them here in observables.
   */
  constructor(private fb: FacebookSDK) {
    var params = {
      appId      : '112535305898047',
      cookie     : false,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    }

    fb.init(params)
  }

    /**
     * @method loginFB
     * 
     * To login to user's Facebook Account using facebook SDK
     * 
     * @return { User } facebook details of a user like
     * accessToken, userID wrapped inside a User interface. 
     */
    loginFB(): User {
      return Observable.create((observer)=> {
        this.fb.login().then(
          (response) => {
            if(response.status === 'connected'){              
              // Unsure about this approach
              // TODO: Discuss this approach
              const user = new User(
                response.authResponse.userID,
                response.authResponse.accessToken)
            
              // Emit User
              observer.next(user);
            }else{
              return null;
            }
          },
          (error: any) => observer.error(error)
        );
      });
    }

    /**
     * Gets Profile Details of a currently logged in User
     * 
     * @return: {UserProfile} user profile of a user containg details like
     * first_name, last_name, etc...
     */
    getUserProfile(): UserProfile {
      return Observable.create((observer) => {
        this.fb.api('/me','get', {fields: 'first_name,last_name'}).then(
          (response) => {
            if(response && !response.error){
              const profile = new UserProfile(
                response.first_name,
                response.last_name)
              
              // Emit User Profile
              observer.next(profile);
            } else {
              return null;
            }
          },
          (error: any) => observer.error(error)
        )
      })
    }
}
