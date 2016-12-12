import { Action } from '@ngrx/store';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { UserAuth } from '../models/';

export type AuthState = UserAuth;

const initialState: AuthState = new UserAuth()

export default function(state = initialState, action: Action): AuthState {
  switch(action.type){
    
    case ActionTypes.LOGIN_SUCCESS: {
        var userAuth: UserAuth = action.payload;
        return Object.assign({}, state, userAuth);
    }

    case ActionTypes.LOGOUT_SUCCESS: {
        return Object.assign({},  initialState);
    }

    default: {
        return state;
    }
  }
}
