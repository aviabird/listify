import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { UserActions } from '../../actions/user.actions';
import { User } from '../../models/';

@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user$: Observable<any>;
  constructor(private router: Router,
              private userActions: UserActions,
              private store: Store<AppState>) {
    this.user$ = this.store.select('user');
    store.dispatch(userActions.loadProfile()); 
  }
  
  ngOnInit() {
  }

}
