import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, UserActions } from '../actions/user.actions';
import { Action } from '@ngrx/store';
import { UserAuthService } from '../services/user-auth.service';
import { User } from '../models';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userActions: UserActions,
    private authService: UserAuthService){ }
}
