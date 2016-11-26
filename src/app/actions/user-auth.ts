import { Action } from '@ngrx/store';
import { type } from '../util';
import { User } from '../models/user';

export const ActionTypes = {
  LOGIN:                    type('[User-Auth] Login'),
  LOGIN_SUCCESS:            type('[User-Auth] Login Success'),
  LOGOUT:                   type('[User-Auth] Logout'),
  LOGOUT_SUCCESS:           type('[User-Auth] Logout Success'),
  CHECK_AUTH:               type('[User-Auth] Check Auth'),  
  CHECK_AUTH_SUCCESS:       type('[User-Auth] Check Auth Success')
};


export class LoginAction implements Action {
  type = ActionTypes.LOGIN;

  constructor(public payload: String) { };
}

export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: any) { };
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
  
  constructor() {};
}

export class LogoutSuccessAction implements Action {
  type = ActionTypes.LOGOUT_SUCCESS;
  
  constructor(public payload: any) {};
}

export class CheckAuthAction implements Action {
  type = ActionTypes.CHECK_AUTH;

  constructor() {}
}

export class CheckAuthSuccessAction implements Action {
  type = ActionTypes.CHECK_AUTH_SUCCESS;

  constructor(public payload: any) {}
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutSuccessAction
  | CheckAuthAction
  | CheckAuthSuccessAction