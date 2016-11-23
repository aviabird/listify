import {Injectable} from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { FacebookAuthService } from '../services/facebook-auth.service'
import * as auth from '../actions/auth';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/switchMap';
import { Auth } from '../models/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthEffects {
    user: {};
    constructor(private update$:Actions,
                private facebookAuthService: FacebookAuthService){
    }

    @Effect() loginFb = this.update$
    .ofType(auth.ActionTypes.LOGIN_FB_USER)
    .map(() => this.facebookAuthService.login())
}