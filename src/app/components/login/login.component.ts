import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, getLoginState } from '../../reducers/index';
import { LoginActions } from '../../actions/login.actions';

@Component({
  selector: 'ist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginActions]
})
export class LoginComponent implements OnInit {
  user;
  constructor(private router: Router,
              private loginActions: LoginActions,
              private store: Store<AppState>) {
    
    this.store.let(getLoginState())
      .filter(state => state.isLoggedIn)
      .subscribe(() => this.router.navigate(['/dashboard']));                  
  }

  ngOnInit() {
  }

  signInUser(signinType: string){
    if(signinType == 'facebook'){
      this.store.dispatch(this.loginActions.login(signinType))
   }
  }

  signOutUser(){
  }
}