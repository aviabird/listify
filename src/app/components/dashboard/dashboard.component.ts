import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { UserActions } from '../../actions/user.actions';
import { LoginActions } from '../../actions/login.actions';
import { User } from '../../models/';
import { FacebookService } from '../../services/facebook.service';

@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // user$: Observable<any>;
  // profilePic$: Observable<any>;
  email: string = 'kartikjagdale11@gmail.com';
  constructor(private router: Router,
              private userActions: UserActions,
              private loginActions: LoginActions,
              private store: Store<AppState>,
              private facebookService: FacebookService) { }

  signOutUser(){
    this.store.dispatch(this.loginActions.logout())
  }

  authorize(socialType){
    this.facebookService.authorize(socialType)
  }

  ngOnInit() {
  }
}
