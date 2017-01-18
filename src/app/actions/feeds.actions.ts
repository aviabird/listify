import { Tweet } from './../models/tweet';
import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
  GET_FEEDS_FOR_ID:         type('Get Tweets for Id'),
  GET_FEEDS_FOR_ID_SUCCESS: type('Get Tweets for Id Success'),
  GET_ALL_FEEDS:            type('Get All Feeds'),
  GET_ALL_FEEDS_SUCCESS:    type('Get All Feeds Success'),
  SELECT_FEED:              type('Select Feed'),
  ADD_FEED_TO_FAV:          type('Add Feed To Fav'),
  ADD_FEED_TO_FAV_SUCCESS:  type('Add Feed To Fav Success')                                  
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

  /**
   * Change Feeds type to any from Tweet
   * 
   * TODO: make a complete model of tweet - voidzero
   * 
   * Get Feeds For Paticular List ID
   * 
   * @param : feeds
   * 
   * @return : Action With payload feeds
   */
  getFeedsForIdSuccess(feeds: any): Action {
    return {
      type: ActionTypes.GET_FEEDS_FOR_ID_SUCCESS,
      payload: feeds
    }
  }

  /**
   * Action to selcet a feed and add it to store
   *
   * @param: feedId
   * 
   * @return Action with payload feedId
   */
  selectFeed(feedId: string): Action {
    return {
      type: ActionTypes.SELECT_FEED,
      payload: feedId
    }
  }

  /**
   * Action that triggers when user adds
   * a particular feed to Fav
   * 
   * @param : feed
   * 
   * @return : Action with payload Feed
   */
  addFeedToFav(feed: any):Action{
    return {
      type: ActionTypes.ADD_FEED_TO_FAV,
      payload: feed
    }
  }
  /**
   * Action that triggers when fav action completes
   * 
   * @param : feed
   * 
   * @return : Action with payload Feed
   */
  addFeedToFavSuccess(feed: any): Action {
    return {
      type: ActionTypes.ADD_FEED_TO_FAV_SUCCESS,
      payload: feed
    }
  }
}
