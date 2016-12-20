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
          this.userAuthService.storeUserAuthInLocalstorage(userAuth);
          return this.loginActions.loginSuccess(userAuth);
        } );

    @Effect() loginSuccess$ = this.actions$
      .ofType(ActionTypes.LOGIN_SUCCESS)
      .map((action: Action) => action.payload)
      .switchMap((userAuth: UserAuth) => this.userAuthService.loginServer(userAuth))
        .map((userAuth: UserAuth) => { 
        this.userAuthService.storeServerToken(userAuth.server_token);
        return this.loginActions.loginServerSuccess(userAuth);
      })
    
    @Effect() signup$ = this.actions$
      .ofType(ActionTypes.SIGNUP)
      .map<string>((action: Action) => action.payload)
      .switchMap((payload) => this.userAuthService.signUp())
        .map((userAuth: UserAuth) => {
          this.userAuthService.storeUserAuthInLocalstorage(userAuth);
          return this.loginActions.signUpSuccess(userAuth);
        } );
    

    @Effect() signUpSucces$ = this.actions$
      .ofType(ActionTypes.SIGNUP_SUCCESS)
      .map(() => go(['/request-email']));


    @Effect() storeUser$ = this.actions$
      .ofType(ActionTypes.STORE_USER)
      .map((action: Action) => action.payload)
      .switchMap((payload) => this.userAuthService.storeUsertoBackend(payload))
      .map((userAuth) => {
        this.userAuthService.storeServerToken(userAuth.server_token);
        return this.loginActions.storeUserSuccess(userAuth)
      })

    @Effect() storeUserSuccess$ = this.actions$
      .ofType(ActionTypes.STORE_USER_SUCCESS)
      .map(() => go(['/dashboard/suggestions']));

    @Effect() logout$ = this.actions$
        .ofType(ActionTypes.LOGOUT)
        .switchMap(() => this.userAuthService.logout())
        .map(() => this.loginActions.logoutSuccess(UserAuth))

}
