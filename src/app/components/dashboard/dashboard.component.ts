import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getUserList } from '../../reducers/index';
import { UserActions } from '../../actions/user.actions';
import { LoginActions } from '../../actions/login.actions';
import { User } from '../../models/';
import { UserListActions } from '../../actions/user-list.actions';
@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lists;
  userList$: Observable<any>;
  constructor(private router: Router,
              private userActions: UserActions,
              private loginActions: LoginActions,
              private userListActions: UserListActions,
              private store: Store<AppState>) {
      this.userList$ = this.store.select(getUserList) 
    }

  signOutUser(){
    this.store.dispatch(this.loginActions.logout())
  }

  ngOnInit() {
    this.store.dispatch(this.userListActions.getUserLists());
  }
}
