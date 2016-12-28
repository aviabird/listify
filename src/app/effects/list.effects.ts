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
    .switchMap((listId) => this.apiService.followList(listId))
    .map((response) => this.responseParser.createUserListobj(response.new_user_list))
    .map((userList) => this.listActions.followSuccess(userList))
}
