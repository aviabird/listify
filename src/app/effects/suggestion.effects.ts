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
}