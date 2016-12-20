import { type } from '../util';
import { Action } from '@ngrx/store';
import { User } from '../models/';

/**
 * A Hash Constant which has all types of Login Action
 * { key: type }
 */
export const ActionTypes = {
  LOAD_PROFILE:         type("Load Profile"),
  LOAD_PROFILE_SUCCESS: type("Load Profile Success")
}

/**
 * List of all Action.
 * TODO: Naming Convention for this Action class
 * Hint: These are Actions performed on a logged in user to gets its details
 * or are the actions that are performed by dashboard.
 */
export class UserActions {
  /**
   * Returns an Action
   * 
   * @return {Action} an Action with type 'Load Profile' and null payload.
   */
  loadProfile(): Action {
    return {
        type: ActionTypes.LOAD_PROFILE
    }
  }

  /**
   * Returns an Action
   * 
   * @return {Action} an Action with type 'Load Profile Success' 
   * and payload as User
   */
  loadProfileSuccess(user: User): Action {
    return {
      type: ActionTypes.LOAD_PROFILE_SUCCESS,
      payload: user
    }
  }
}
