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
import lists, * as fromLists from './list.reducer';
import feeds, * as fromFeeds from './feeds.reducer';

// Entire State of a App
export interface AppState {
    userAuth:      fromUserAuth.AuthState;
    user:          fromUser.UserState;
    userList:      fromUserList.State;
    lists:         fromLists.State;
    feeds:         fromFeeds.State;
    router:        RouterState;
}

// Export all the reducers
export default compose(combineReducers)({
    userAuth:      userAuth,
    user:          user,
    userList:      userList,
    lists:          lists,
    feeds:         feeds,
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

export const getListsState = (appState: AppState) => appState.lists;
export const getListsEntities = createSelector(getListsState, fromLists.getEntities);
export const getListsIds = createSelector(getListsState, fromLists.getIds);
export const getLists = createSelector(getListsEntities, getListsIds, (lists, ids) => {
  return ids.map(id => lists[id]);
});

export const getUserListsState = (appState: AppState) => appState.userList;
export const getUserListEntities = createSelector(getUserListsState, fromUserList.getEntities);
export const getUserListIds = createSelector(getUserListsState, fromUserList.getIds);
export const getUserList = createSelector(getUserListEntities, getUserListIds, (userLists, ids) => {
  return ids.map(id => userLists[id]);
});

// export const getListIdsInUserLists = createSelector(getUserListEntities, getUserListIds, (userLists, ids) => {
//   return ids.map(id => userLists[id].list_id);
// });

export const getFeedsState = (appState: AppState) => appState.feeds;
export const getFeedsIds = createSelector(getFeedsState, fromFeeds.getIds); 
export const getFeedsEntities = createSelector(getFeedsState, fromFeeds.getEntities);
export const getAllFeeds = createSelector(getFeedsEntities, getFeedsIds, (feeds, ids) => {
  return ids.map(id => feeds[id]);
});

export const getSelectedFeedId = createSelector(getFeedsState, fromFeeds.getSelectedFeedId);

export const getSelectedFeed = createSelector(getFeedsEntities, getSelectedFeedId, (feeds, id) => {
  return feeds[id];
});