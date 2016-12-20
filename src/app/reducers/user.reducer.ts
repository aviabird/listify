import { Action } from '@ngrx/store';
import { User } from '../models/'; 
import { ActionTypes } from '../actions/user.actions';
export type UserState = User;

const initialState: UserState = new User();

export default function(state = initialState, action: Action): UserState {
    switch(action.type){
        case ActionTypes.LOAD_PROFILE_SUCCESS: {
            const user: User = action.payload;
            return Object.assign({}, state, user)
        }
        default: {
            return state;
        }
    }
}

