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

/**
 * // INVALID COMMENT CURRENTLY
 * TODO: Cuurentlly to get details from differnet endpoint of facebook
 * like /me and /me/picture are differnet endpoints
 * we need to send two seperate requests to facebook API
 * So, there is differnet approach called batch request to facebook API
 * inorder to make mulitple requests.
 * Reference: https://developers.facebook.com/docs/graph-api/making-multiple-requests
 *  
 */
@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // user$: Observable<any>;
  // profilePic$: Observable<any>;
  constructor(private router: Router,
              private userActions: UserActions,
              private loginActions: LoginActions,
              private store: Store<AppState>) { }

  signOutUser(){
    this.store.dispatch(this.loginActions.logout())
  }

  ngOnInit() {
  }
}
