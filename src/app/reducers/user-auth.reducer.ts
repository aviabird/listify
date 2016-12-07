import { Action } from '@ngrx/store';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { UserAuth } from '../models/';

export type AuthState = UserAuth;

const initialState: AuthState = new UserAuth()

export default function(state = initialState, action: Action): AuthState {
  switch(action.type){
    
    case ActionTypes.LOGIN_SUCCESS: {
      /**
       * Currently a Dirty Implementation of 
       * getting a access_token from the response
       * TODO: Parse the response before comming here.
       */
        var response = action.payload;
        var token = JSON.parse(response._body).token;
        localStorage.setItem('access_token', token);
        const user_auth: UserAuth = new UserAuth(token);
        return Object.assign({}, state, user_auth);
    }

    case ActionTypes.LOGOUT_SUCCESS: {
        return Object.assign({},  initialState);
    }

    default: {
        return state;
    }
  }
}