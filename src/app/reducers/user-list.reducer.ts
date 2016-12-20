import { Action } from '@ngrx/store';
import { UserList } from '../models/';
import { ActionTypes } from '../actions/user.actions';

export type UserListState = UserList[];

const initialState: UserListState = [];

export default function(state = initialState, action: Action): UserListState {
    switch(action.type){
        default: {
            return state;
        }
    }
}