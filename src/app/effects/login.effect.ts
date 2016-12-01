import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { Action } from '@ngrx/store';
import { FacebookAuthService } from '../services/facebook-auth.service';

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions,
                private loginActions: LoginActions,
                private facebookAuthService: FacebookAuthService
                ){}

    @Effect() login$ = this.actions$
        .ofType(ActionTypes.LOGIN)
        .map<string>((action: Action) => action.payload)
        .switchMap((provider:string) => this.facebookAuthService.loginFB())
        .map(response => this.loginActions.loginSuccess(response));
}