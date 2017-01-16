import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes,UserListActions } from '../actions/user-list.actions';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { ResponseParseService } from '../services/response-parse.service';
import { UserList } from '../models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserListsEffects {
  constructor(
    private actions$: Actions,
    private userListActions: UserListActions,
    private apiService: ApiService,
    private reponseParser: ResponseParseService
  ){ }

  @Effect() getUserLists$ = this.actions$
    .ofType(ActionTypes.GET_USER_LISTS)
    .switchMap(() => this.apiService.getUserLists())
    .map((response:any) => this.reponseParser.createUserListsobj(response))
    .map((userLists: UserList[]) => this.userListActions.getUserListsSuccess(userLists));

}
