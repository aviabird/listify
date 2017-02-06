import { type } from '../util';
import { Action } from '@ngrx/store';
import { List } from '../models';
import { UserList } from '../models';

export const ActionTypes = {
  RETRIVE_LISTS:         type('Retrive Lists'),
  RETRIVE_LISTS_SUCCESS: type('Retrive Lists Success'),
  FOLLOW_LIST:           type('Follow List'),
  FOLLOW_LIST_SUCCESS:   type('Follow List Success'),
  UNFOLLOW_LIST:         type('UnFollow List'),
  UNFOLLOW_LIST_SUCCESS: type('UnFollow List Success'),
  UPDATE_LISTS:           type('Update Lists')
}

export class ListActions {
  
  retriveLists(): Action {
    return {
      type: ActionTypes.RETRIVE_LISTS
    }
  }

  retriveListsSuccess(suggestedLists: List[]): Action {
    return {
      type: ActionTypes.RETRIVE_LISTS_SUCCESS,
      payload: suggestedLists
    }
  }

  follow(listId: string): Action {
    return {
      type: ActionTypes.FOLLOW_LIST,
      payload: listId
    }
  }

  followSuccess(response: any): Action {
    return {
      type: ActionTypes.FOLLOW_LIST_SUCCESS,
      payload: response
    }
  }

  unFollowList(listId: string): Action{
    return {
      type: ActionTypes.UNFOLLOW_LIST,
      payload: listId
    }
  }
  
  unFollowListSuccess(response: any): Action {
    return {
      type: ActionTypes.UNFOLLOW_LIST_SUCCESS,
      payload: response
    }
  }

  updateLists(response: any): Action {
    return {
      type: ActionTypes.UPDATE_LISTS,
      payload: response
    }
  }
}
