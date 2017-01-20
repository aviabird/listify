import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, FeedsActions } from '../actions/feeds.actions';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { ResponseParseService } from '../services/response-parse.service';
import { Tweet } from '../models';

@Injectable()
export class FeedsEffects {
  constructor(private actions$: Actions,
    private feedsActions: FeedsActions,
    private apiService: ApiService,
    private responseParser: ResponseParseService
  ) { }

  @Effect() getFeedsForId$ = this.actions$
    .ofType(ActionTypes.GET_FEEDS_FOR_ID)
    .map((action: Action) => action.payload)
    .switchMap((userListId: any) => this.apiService.getListsTimeLine(userListId))
    .map((response: any) => this.responseParser.createTweetsObj(response))
    .map((tweets: Tweet[]) => this.feedsActions.getFeedsForIdSuccess(tweets));


  @Effect() getAllFeeds$ = this.actions$
    .ofType(ActionTypes.GET_ALL_FEEDS)
    .switchMap(() => this.apiService.all_feeds())
    .map((response: any) => this.responseParser.createTweetsObj(response))
    .map((tweets: Tweet[]) => this.feedsActions.getAllFeedsSuccess(tweets));

  @Effect() addFeedToFav$ = this.actions$
    .ofType(ActionTypes.ADD_FEED_TO_FAV)
    .map((action: Action) => action.payload)
    .switchMap((feed: any) => this.apiService.addToFav(feed))
    .map((response: any) => this.feedsActions.addFeedToFavSuccess(response.feed));

  @Effect() removeFeedFromFav$ = this.actions$
    .ofType(ActionTypes.REMOVE_FEED_FROM_FAV)
    .map((action: Action) => action.payload)
    .switchMap((feed: any) => this.apiService.removeFromFav(feed))
    .map((response: any) => this.feedsActions.removeFeedFromFavSuccess(response.feed));

  @Effect() retweet$ = this.actions$
    .ofType(ActionTypes.RETWEET)
    .map((action: Action) => action.payload)
    .switchMap((feed: any) => this.apiService.retweet(feed))
    .map((response: any) => this.feedsActions.retweetSuccess(response.feed));

  @Effect() reply$ = this.actions$
    .ofType(ActionTypes.REPLY)
    .map((action: Action) => action.payload)
    .switchMap((messageWithFeed: any) => this.apiService.reply(messageWithFeed))
    .map((response: any) => this.feedsActions.replySuccess(response.feed));
}
