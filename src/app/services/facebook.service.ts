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
   * @param FacebookSDK the SDK service which returns all
   * faccebook methods as a promise so we can convert them here in observables.
   */
  constructor(private auth: AuthService) {
    var params = {
      appId      : '112535305898047',
      cookie     : false,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    }

    // fb.init(params)
  }

    /**
     * @method loginFB
     * 
     * To login to user's Facebook Account using facebook SDK
     * 
     * @return { Observable<any> } facebook details of a user like
     * accessToken, userID wrapped inside a User interface. 
     * Which the observer emits
     */
    loginFB(): Observable<any> {
      return this.auth.authenticate('facebook');
    }

    logoutFB(): Observable<any> {
      return Observable.of(localStorage.removeItem('access_token'));
    }



  /**
   * Gets Profile Details of a currently logged in User
   * 
   * @return: {Observable<any>} user profile of a user containg details like
   * first_name, last_name, etc...
   * Which the observer emits.
   */
  getUserProfile(): Observable<any> {
    return Observable.create((observer) => {
      // this.fb.api('/me','get', {fields: 'first_name,last_name'}).then(
      //   (response) => {
      //     if(response && !response.error){
      //       const profile = new UserProfile(
      //                         response.first_name,
      //                         response.last_name);
            
      //       const user = new User(response.id, profile);
      //       // Emit User Profile
      //       observer.next(user);
      //     } else {
      //       return null;
      //     }
      //   },
      //   (error: any) => observer.error(error)
      // );
    });
  }

  /**
   * Return a Facebook Profile picture object 
   * containinig link to profile picture
   * 
   * @return: Observable<any> of which observer emits a picture object
   * contianing link and otehr params like height and width
   * 
   * TODO: make the height and width conifgurable.
   */
  getUserProfilePic(): Observable<any> {
    return Observable.create((observer) => {
      // this.fb.api('/me/picture?width=200&height=200').then(
      //   (response) => {
      //     if(response && !response.error) {
      //       observer.next(response);
      //     }
      //   }
      // )
    })
  }
}
