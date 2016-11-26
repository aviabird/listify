import * as fromUserAuth from './user-auth';
import {Action, combineReducers} from '@ngrx/store';
import { compose } from '@ngrx/core/compose'
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/let';

export interface AppState {
    userAuth: fromUserAuth.State
}

export default compose(combineReducers)({
    userAuth: fromUserAuth.reducer
});

export function getUserAuthState(state$: Observable<AppState>) {
  return state$.select(state => state.userAuth);
}

 export const getUser = compose(fromUserAuth.getUser, getUserAuthState);
 export const getUserAuthStatus = compose(fromUserAuth.getAuthStatus, getUserAuthState);