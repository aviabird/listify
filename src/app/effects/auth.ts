import {Injectable} from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { FacebookAuthService } from '../services/facebook-auth.service'
import * as auth from '../actions/auth';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/switchMap';
import { Auth } from '../models/auth';

@Injectable()
export class AuthEffects {
    constructor(private update$:Actions,
                private facebookAuthService: FacebookAuthService){
    }

    @Effect() loginFb = this.update$
    .ofType(auth.ActionTypes.LOGIN_FB_USER)
    .map(() => this.facebookAuthService.checkLoginState())
    .map((data) => {
        // debugger
        console.log("Data is :", data)
    })
    .map(() => new auth.LoginFbActionSuccess(<Auth>{}))
}