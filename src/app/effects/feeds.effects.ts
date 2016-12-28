import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, FeedsActions} from '../actions/feeds.actions';
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
    .switchMap((userListIds: any) => this.apiService.getListsTimeLine(userListIds))
    .map((response: any) => this.responseParser.createTweetsObj(response))
    .map((tweets: Tweet[]) => this.feedsActions.getFeedsForIdSuccess(tweets));


    @Effect() getAllFeeds$ = this.actions$
      .ofType(ActionTypes.GET_ALL_FEEDS)
      .switchMap(() => this.apiService.all_feeds())
      .map((response: any) => this.responseParser.createTweetsObj(response))
      .map((tweets: Tweet[]) => this.feedsActions.getAllFeedsSuccess(tweets));
}
