import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { Action } from '@ngrx/store';
import { UserAuthService } from '../services/user-auth.service';
import { UserAuth } from '../models';

@Injectable()
export class UserAuthEffects {
    constructor(private actions$: Actions,
                private loginActions: LoginActions,
                private userAuthService: UserAuthService
                ){}

    @Effect() login$ = this.actions$
        .ofType(ActionTypes.LOGIN)
        .map<string>((action: Action) => action.payload)
        .switchMap((payload) => this.userAuthService.login())
        .map((userAuth: UserAuth) => {
          localStorage.setItem('access_token', userAuth.access_token);
          localStorage.setItem('secret_token', userAuth.secret_token);
          return this.loginActions.loginSuccess(userAuth);
        } );
    
    @Effect() logout$ = this.actions$
        .ofType(ActionTypes.LOGOUT)
        .switchMap(() => this.userAuthService.logout())
        .map(() => this.loginActions.logoutSuccess())

}
