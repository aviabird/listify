import { Action } from '@ngrx/store';
import { UserList } from '../models/';
import { ActionTypes } from '../actions/suggestions.actions';

export type UserListState = {
 UserLists: UserList[]
}

const initialState: UserListState = [];

export default function(state = initialState, action: Action): UserListState {
    switch(action.type){
      case ActionTypes.FOLLOW_LIST_SUCCESS: {
        var userList = action.payload;
        var newState = state.push(userList)
        return Object.assign([], state, newState); 
      }
      default: {
        return state;
      }
    }
}