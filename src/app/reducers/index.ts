import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/let';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { createSelector } from 'reselect';

import userAuth, * as fromUserAuth from './user-auth.reducer';
import user, * as  fromUser from './user.reducer';
import userList, * as fromUserList from './user-list.reducer';
import suggestedList, * as fromSuggestedList from './suggested-list.reducer';
import tweets, * as fromTweets from './tweets.reducer';

// Entire State of a App
export interface AppState {
    userAuth:      fromUserAuth.AuthState;
    user:          fromUser.UserState;
    userList:      fromUserList.State;
    suggestedList: fromSuggestedList.State;
    tweets:        fromTweets.State;
    router:        RouterState;
}

// Export all the reducers
export default compose(combineReducers)({
    userAuth:      userAuth,
    user:          user,
    userList:      userList,
    suggestedList: suggestedList,
    tweets:        tweets,
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

export const getUserState = (appState: AppState) => appState.user;

export const getSuggListsState = (appState: AppState) => appState.suggestedList;
export const getSuggestedEntities = createSelector(getSuggListsState, fromSuggestedList.getEntities);
export const getListIds = createSelector(getSuggListsState, fromSuggestedList.getIds);
export const getSuggestedList = createSelector(getSuggestedEntities, getListIds, (lists, ids) => {
  return ids.map(id => lists[id]);
}); 

export const getUserListsState = (appState: AppState) => appState.userList;
export const getUserListEntities = createSelector(getUserListsState, fromUserList.getEntities);
export const getUserListIds = createSelector(getUserListsState, fromUserList.getIds);
export const getUserList = createSelector(getUserListEntities, getUserListIds, (userLists, ids) => {
  return ids.map(id => userLists[id]);
});

export const getTweetsState = (appState: AppState) => appState.tweets; 
export const getTweetIds = createSelector(getTweetsState, fromTweets.getIds); 
export const getTweetsEntities = createSelector(getTweetsState, fromTweets.getEntities);
export const getTweets = createSelector(getTweetsEntities, getTweetIds, (tweets, ids) => {
  return ids.map(id => tweets[id]);
});