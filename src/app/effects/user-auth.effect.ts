import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { Action } from '@ngrx/store';
import { UserAuthService } from '../services/user-auth.service';
import { UserAuth } from '../models';
import { go } from '@ngrx/router-store';

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
    
    @Effect() storeUser$ = this.actions$
      .ofType(ActionTypes.STORE_USER)
      .map((action: Action) => action.payload)
      .switchMap((payload) => this.userAuthService.storeUsertoBackend(payload))
      .map((userAuth) => {
        console.log("Server response: ", userAuth);
        return this.loginActions.storeUserSuccess(userAuth)
      })

    @Effect() storeUserSuccess$ = this.actions$
      .ofType(ActionTypes.STORE_USER_SUCCESS)
      .map(() => go(['/dashboard']));

    @Effect() logout$ = this.actions$
        .ofType(ActionTypes.LOGOUT)
        .switchMap(() => this.userAuthService.logout())
        .map(() => this.loginActions.logoutSuccess(UserAuth))

}
