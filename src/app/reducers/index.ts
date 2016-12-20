import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/let';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RouterState, routerReducer } from '@ngrx/router-store';

import userAuth, * as fromUserAuth from './user-auth.reducer';
import user, * as  fromUser from './user.reducer';
import userList, * as fromUserList from './user-list.reducer';
import suggestedList, * as fromSuggestedList from './suggested-list.reducer';

// Entire State of a App
export interface AppState {
    userAuth:      fromUserAuth.AuthState;
    user:          fromUser.UserState;
    userList:      fromUserList.UserListState;
    suggestedList: fromSuggestedList.SuggestedListState;
    router:        RouterState;
}

// Export all the reducers
export default compose(combineReducers)({
    userAuth:      userAuth,
    user:          user,
    userList:      userList,
    suggestedList: suggestedList,
    router:        routerReducer
});

/**
 * Get Login State returns UserAuth from the store
 * and depending on the persense of access_token
 * in userAuth the login status of user is defined.
 */
export function getLoginState(){
    return (state$: Observable<AppState>) => state$
        .select(state => state.userAuth)
}
