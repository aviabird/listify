import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes, LoginActions } from '../actions/login.actions';
import { Action } from '@ngrx/store';
import { FacebookService } from '../services/facebook.service';
import { UserAuth } from '../models';

@Injectable()
export class UserAuthEffects {
    constructor(private actions$: Actions,
                private loginActions: LoginActions,
                private facebookService: FacebookService
                ){}

    @Effect() login$ = this.actions$
        .ofType(ActionTypes.LOGIN)
        .map<string>((action: Action) => action.payload)
        .switchMap((provider:string) => this.facebookService.loginFB())
        .map((response: any) => this.loginActions.loginSuccess(response));
    
    @Effect() logout$ = this.actions$
        .ofType(ActionTypes.LOGOUT)
        .switchMap(() => this.facebookService.logoutFB())
        .map(() => this.loginActions.logoutSuccess())

}
