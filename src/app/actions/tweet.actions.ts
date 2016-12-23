import { type } from '../util';
import { Action } from '@ngrx/store';
import { Tweet } from '../models';

export const ActionTypes = {
  GET_TWEETS:        type('Get Tweets'),
  GET_TWEETS_SUCCESS: type('Get Tweets Success')   
}

export class TweetsActions {
  
  getTweets(userListIds): Action {
    return {
      type: ActionTypes.GET_TWEETS,
      payload: userListIds
    }
  }

  get_tweets_success(tweets) {
    return {
      type: ActionTypes.GET_TWEETS_SUCCESS,
      payload: tweets
    }
  }

}