import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { Action } from '@ngrx/store';
@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions,
                private loginActions: LoginActions
                ){}

    @Effect() login$ = this.actions$
        .ofType(ActionTypes.LOGIN)
        .map<string>((action: Action) => action.payload)
        .map(() => this.loginActions.loginSuccess("success"))
}