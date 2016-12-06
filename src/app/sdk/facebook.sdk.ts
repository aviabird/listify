/**
 * FacebookSDK which calls different Facebook api options
 * for reference see: 
 * https://github.com/zyramedia/ng2-facebook-sdk/blob/master/src/ng2-facebook-sdk.ts
 */

import { Injectable } from '@angular/core';
import { FacebookInitParams } from '../models/facebookSDK/facebook-init-params';
import { FacebookLoginResponse } from '../models/facebookSDK/facebook-login-response';

declare var FB: any;

@Injectable()
export class FacebookSDK {
  constructor(){ }

  /**
   * This method is used to initialize and setup Facebook SDK
   * 
   * @param params
   */
  init(params: FacebookInitParams): void {
    FB.init(params);
  }


  /**
   * Login the User
   * Returns a Promise Object on which on applyng `then`
   * it resolves the value given by Fb.login sdk.
   * 
   * @return {Promise<FacebookLoginResponse>}
   */
  login(){
    return new Promise<FacebookLoginResponse>(
      (resolve, reject) => {
        FB.login((response) => {
          if(response.authResponse){
            resolve(response);
          } else{
            reject();
          }
        })
      }
    );
  }

  /**
   * Yet to Implement
   * Ignore this method;
   */
  getLoginStatus(): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        FB.getLoginStatus((response: any) => {
          if(!response) reject();
          else resolve(response);
        });
      }
    )
  }

}
