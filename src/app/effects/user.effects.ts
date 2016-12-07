import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, UserActions } from '../actions/user.actions';
import { Action } from '@ngrx/store';
import { FacebookService } from '../services/facebook.service';
import { User } from '../models';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userActions: UserActions,
    private facebookService: FacebookService){ }

  @Effect() loadProfile$ = this.actions$
  .ofType(ActionTypes.LOAD_PROFILE)
  .switchMap(() => this.facebookService.getUserProfile())
  .map((user: User) => this.userActions.loadProfileSuccess(user))
}