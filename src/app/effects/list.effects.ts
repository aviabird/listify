import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, ListActions } from '../actions/list.actions';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { ResponseParseService } from '../services/response-parse.service';
import { List } from '../models';

@Injectable()
export class ListEffects {
  constructor(
    private actions$: Actions,
    private listActions: ListActions,
    private apiService: ApiService,
    private responseParser: ResponseParseService
  ){ }

  @Effect() retriveLists$ = this.actions$
    .ofType(ActionTypes.RETRIVE_LISTS)
    .switchMap(() => this.apiService.retriveSuggestion())
    .filter(response => response !== null )
    .map(response => this.responseParser.createSuggestedListsObj(response))
    .map((lists: List[]) => this.listActions.retriveListsSuccess(lists));
  
  @Effect() followList$ = this.actions$
    .ofType(ActionTypes.FOLLOW_LIST)
    .map((action: Action) => action.payload)
    .switchMap((listId: string) => this.apiService.followList(listId))
    .map((response) => this.listActions.followSuccess(response))


  @Effect() followListSuccess$ = this.actions$
    .ofType(ActionTypes.FOLLOW_LIST_SUCCESS)
    .map((action: Action) => action.payload.new_list)
    .map((new_list: any) => this.responseParser.createSuggestedListsObj(new_list))
    .map((updatedLists: List[]) => this.listActions.updateLists(updatedLists));

  @Effect() unFollowList$ = this.actions$
    .ofType(ActionTypes.UNFOLLOW_LIST)
    .map((action: Action) => action.payload)
    .switchMap((listId: string) => this.apiService.unFollowList(listId))
    .map((response: any) => this.listActions.unFollowListSuccess(response));
}
