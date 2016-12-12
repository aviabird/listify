import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
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
  constructor(private loginActions: LoginActions,
              private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  login(){
    this.store.dispatch(this.loginActions.login('twitter'))
}
}