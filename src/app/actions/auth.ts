import { Action } from '@ngrx/store';
import { type } from '../util';
import { Auth } from '../models/auth'
export const ActionTypes = {
  LOGIN_FB_USER:      type('Login'),
  LOGIN_FB_COMPLETE:  type('Login Complete')
};

// When a User click on login with facebook
export class LoginFbAction implements Action {

      type = ActionTypes.LOGIN_FB_USER;
      constructor(){
        console.log("LoginFbAction action triggered");
      }
}

export class LoginFbActionSuccess implements Action{
  type = ActionTypes.LOGIN_FB_COMPLETE
  constructor(public payload: Auth) {
    console.log("Inside Success");
  }
}



export type AuthActions
  = LoginFbAction
  | LoginFbActionSuccess