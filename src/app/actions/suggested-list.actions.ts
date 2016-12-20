import { type } from '../util';
import { Action } from '@ngrx/store';
import { SuggestedList } from '../models';

export const ActionTypes = {
  FOLLOW_LIST:         type('follow list'),
  FOLLOW_LIST_SUCCESS: type('follow list success')
}

export class SuggestedListActions {
  
  follow(): Action {
    return {
      type: ActionTypes.FOLLOW_LIST
    }
  }

  followSuccess(): Action {
    return {
      type: ActionTypes.FOLLOW_LIST_SUCCESS
    }
  }
}
