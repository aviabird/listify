import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { UserActions } from '../../actions/user.actions';
import { LoginActions } from '../../actions/login.actions';
import { User } from '../../models/';

@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lists;
  constructor(private router: Router,
              private userActions: UserActions,
              private loginActions: LoginActions,
              private store: Store<AppState>) {
    }

  signOutUser(){
    this.store.dispatch(this.loginActions.logout())
  }

  ngOnInit() {
  }
}
