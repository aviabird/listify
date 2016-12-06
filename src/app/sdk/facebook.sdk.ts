/**
 * FacebookSDK which calls different Facebook api options
 * for reference see: 
 * https://github.com/zyramedia/ng2-facebook-sdk/blob/master/src/ng2-facebook-sdk.ts
 */

import { Injectable } from '@angular/core';
import { FacebookInitParams } from '../models/facebookSDK/facebook-init-params';
import { FacebookLoginResponse } from '../models/facebookSDK/facebook-login-response';

declare var FB: any;

/** API Methods That can be called on Facebook SDK */
export type FacebookApiMethod = 'get' | 'post' | 'delete';

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
  login(): Promise<FacebookLoginResponse> {
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

  /**
   * This Lets you make calls to Graph API
   * 
   * @param path This is a Graph API endpoint you want to call.
   * @param method this is a HTTP method that you use for API request.
   * @param params This is an object consisting of any parameters that you want to pass into your Graph API call
   * @return {Promise<any>}
   */
  api(path: string, method: FacebookApiMethod = 'get', params: any = {}): Promise<any> {
    return new Promise<any>(
      (resolve, reject) => {
        FB.api(path, method, params, (response: any) => {
          if(!response){
            reject();
          } else if (response.error){
            reject(response.error);
          } else {
            resolve(response);
          }
        })
      }
    );
  }
}
