import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, TweetsActions} from '../actions/tweet.actions';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { Tweet } from '../models';

@Injectable()
export class TweetEffects {
  constructor(private actions$: Actions,
              private tweetsActions: TweetsActions,
              private apiService: ApiService) { }

  @Effect() getTweets$ = this.actions$
    .ofType(ActionTypes.GET_TWEETS)
    .map((action: Action) => action.payload)
    .switchMap((userListIds: any) => this.apiService.getListsTimeLine(userListIds))
    .map((response: any) => this.apiService.createTweetsObj(response))
    .map((tweets: Tweet[]) => this.tweetsActions.get_tweets_success(tweets));


    @Effect() getAllFeeds$ = this.actions$
      .ofType(ActionTypes.GET_ALL_FEEDS)
      .switchMap(() => this.apiService.all_feeds())
      .map((response: any) => this.apiService.createTweetsObj(response))
      .map((tweets: Tweet[]) => this.tweetsActions.get_tweets_success(tweets));
}