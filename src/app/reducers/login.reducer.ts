import { Action } from '@ngrx/store';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { User } from '../models/';

export interface LoginState {
    isLoggedIn: boolean;
    user: User;
};

const initialState: LoginState = {
    isLoggedIn: false,
    user: new User()
};

export default function(state = initialState, action: Action): LoginState {
    switch(action.type){
        case ActionTypes.LOGIN_SUCCESS: {
            const user: User = action.payload;
            return Object.assign({}, state, {isLoggedIn: true, user: user});
        }

        default: {
            return state;
        }
    }
}