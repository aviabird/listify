import { type } from '../util';
import { Action } from '@ngrx/store';
import { Tweet } from '../models';

export const ActionTypes = {
  GET_TWEETS:        type('Get Tweets'),
  GET_TWEETS_SUCCESS: type('Get Tweets Success'),
  GET_ALL_FEEDS: type('Get All Feeds'),
  GET_ALL_FEEDS_SUCCESS: type('Get All Feeds Success') 
}

export class TweetsActions {
  
  get_all_feeds(): Action {
    return {
      type: ActionTypes.GET_ALL_FEEDS
    }
  }

  get_all_feeds_success(feeds): Action {
    return {
      type: ActionTypes.GET_ALL_FEEDS_SUCCESS,
      payload: feeds
    }
  }

  getTweets(userListIds: any): Action {
    return {
      type: ActionTypes.GET_TWEETS,
      payload: userListIds
    }
  }

  get_tweets_success(tweets: Tweet[]) {
    return {
      type: ActionTypes.GET_TWEETS_SUCCESS,
      payload: tweets
    }
  }

}