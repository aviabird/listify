import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, UserActions } from '../actions/user.actions';
import { Action } from '@ngrx/store';
import { ApiService } from '../services/api.service';
import { User } from '../models';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userActions: UserActions,
    private api: ApiService){ }

    @Effect() loadUserProfile$ = this.actions$
      .ofType(ActionTypes.LOAD_PROFILE)
      .switchMap(() => this.api.getUserDetail())
      .map((response:any) => this.api.createUserObj(response))
      .map((user: User) => this.userActions.loadProfileSuccess(user))


}
