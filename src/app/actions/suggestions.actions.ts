import { type } from '../util';
import { Action } from '@ngrx/store';
import { SuggestedList } from '../models';

export const ActionTypes = {
  RETRIVE_LISTS:         type('Retrive Lists'),
  RETRIVE_LISTS_SUCCESS: type('Retrive Lists Success'),
  FOLLOW_LIST:           type('follow list'),
  FOLLOW_LIST_SUCCESS:   type('follow list success')
}

export class SuggestionsActions {
  
  retriveLists(): Action {
    return {
      type: ActionTypes.RETRIVE_LISTS
    }
  }

  retriveListsSuccess(suggestedLists): Action {
    return {
      type: ActionTypes.RETRIVE_LISTS_SUCCESS,
      payload: suggestedLists
    }
  }

  follow(listId): Action {
    return {
      type: ActionTypes.FOLLOW_LIST,
      payload: listId
    }
  }

  followSuccess(userList): Action {
    return {
      type: ActionTypes.FOLLOW_LIST_SUCCESS,
      payload: userList
    }
  }
}
