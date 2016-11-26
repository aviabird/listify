import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {UserAuthService} from '../../services/user-auth.service';
import { AngularFire, AuthProviders } from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers/';
import * as userAuth from '../../actions/user-auth';
import * as fromUserAuth from '../../reducers/user-auth';
import * as fromRoot from '../../reducers';
import { User } from '../../models/user';

@Component({
  selector: 'ist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserAuthService]
})
export class LoginComponent implements OnInit {
  user: Observable<User>;
  userIsAuthenticated: Observable<boolean>;
  constructor(private userAuthService: UserAuthService, 
              private af: AngularFire,
              private store: Store<AppState>
  ) {
    this.user = store.select('userAuth').select<User>('user');
    this.userIsAuthenticated = store.let(fromRoot.getUserAuthStatus);
   }

  ngOnInit() {
    this.store.dispatch(new userAuth.CheckAuthAction());
  }

  signInUser(signinType: String){
    console.log("Login Clicked: ", signinType);
    if(signinType === 'facebook') {
      this.store.dispatch(new userAuth.LoginAction(signinType));
    }
  }

  signOutUser(){
    this.store.dispatch(new userAuth.LogoutAction());
  }
}