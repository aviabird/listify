import { Action } from '@ngrx/store';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { UserAuth } from '../models/';

export interface AuthState {
    isLoggedIn: boolean;
    user_auth: UserAuth;
};

const initialState: AuthState = {
    isLoggedIn: false,
    user_auth: new UserAuth()
};

export default function(state = initialState, action: Action): AuthState {
    switch(action.type){
        case ActionTypes.LOGIN_SUCCESS: {
            const user_auth: UserAuth = action.payload;
            return Object.assign({}, state, { isLoggedIn: true, user_auth: user_auth });
        }

        default: {
            return state;
        }
    }
}