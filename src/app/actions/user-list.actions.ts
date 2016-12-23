import { type } from '../util';
import { Action } from '@ngrx/store';
import { UserList } from '../models/';

export const ActionTypes = {
  GET_USER_LISTS:        type("Get User List"),
  GET_USER_LISTS_SUCCESS:  type("Get User List Success")
}


export class UserListActions {
  getUserLists(): Action {
    return {
      type: ActionTypes.GET_USER_LISTS
    }
  }

  getUserListsSuccess(userLists): Action {
    console.log(userLists);
    return {
      type: ActionTypes.GET_USER_LISTS_SUCCESS,
      payload: userLists
    }
  }
}