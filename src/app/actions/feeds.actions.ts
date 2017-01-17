import { Tweet } from './../models/tweet';
import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
  GET_FEEDS_FOR_ID:         type('Get Tweets for Id'),
  GET_FEEDS_FOR_ID_SUCCESS: type('Get Tweets for Id Success'),
  GET_ALL_FEEDS:            type('Get All Feeds'),
  GET_ALL_FEEDS_SUCCESS:    type('Get All Feeds Success'),
  SELECT_FEED:              type('Select Feed')
}

export class FeedsActions {
  
  getAllFeeds(): Action {
    return {
      type: ActionTypes.GET_ALL_FEEDS
    }
  }

  /**Changed Feeds type to any from Tweet
   * TODO: make a complete model of tweet
   */
  getAllFeedsSuccess(feeds: any): Action {
    return {
      type: ActionTypes.GET_ALL_FEEDS_SUCCESS,
      payload: feeds
    }
  }

  getFeedsForId(userListId: any): Action {
    return {
      type: ActionTypes.GET_FEEDS_FOR_ID,
      payload: userListId
    }
  }

  /**Change Feeds type to any from Tweet
   * TODO: make a complete model of tweet
   */
  getFeedsForIdSuccess(feeds: any): Action {
    return {
      type: ActionTypes.GET_FEEDS_FOR_ID_SUCCESS,
      payload: feeds
    }
  }

  selectFeed(feedId: string): Action {
    return {
      type: ActionTypes.SELECT_FEED,
      payload: feedId
    }
  }
}
