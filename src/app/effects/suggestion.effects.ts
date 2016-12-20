import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, SuggestionsActions } from '../actions/suggestions.actions';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { SuggestedList } from '../models';

@Injectable()
export class SuggestionEffects {
  constructor(
    private actions$: Actions,
    private suggestionsActions: SuggestionsActions,
    private apiService: ApiService
  ){ }

  @Effect() retriveLists$ = this.actions$
    .ofType(ActionTypes.RETRIVE_LISTS)
    .switchMap(() => this.apiService.retriveSuggestion())
    .map(response => this.apiService.createSuggestedListsObj(response))
    .map((suggestedLists: SuggestedList[]) => this.suggestionsActions.retriveListsSuccess(suggestedLists));
  
  @Effect() followList$ = this.actions$
    .ofType(ActionTypes.FOLLOW_LIST)
    .map((action: Action) => action.payload)
    .switchMap((listId) => this.apiService.followList(listId))
    .map((response) => this.apiService.createUserListobj(response.new_user_list))
    .map((userList) => this.suggestionsActions.followSuccess(userList))
}