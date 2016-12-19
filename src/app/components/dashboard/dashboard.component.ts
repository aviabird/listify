import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { UserActions } from '../../actions/user.actions';
import { LoginActions } from '../../actions/login.actions';
import { User } from '../../models/';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token: any;
  lists;
  constructor(private router: Router,
              private userActions: UserActions,
              private loginActions: LoginActions,
              private store: Store<AppState>,
              private data: UserAuthService) {

    this.store.select(state => this.token = state.userAuth.server_token).subscribe()
    }

  signOutUser(){
    this.store.dispatch(this.loginActions.logout())
  }

  follow(){
    console.log("list ist",this.lists);
    var list_id = this.lists[0]['_id']

    this.data.followList(list_id, this.token).subscribe(response => {
      console.log("Response is: ", response);
    })
  }

  ngOnInit() {
    this.data.retriveSuggestion().subscribe(response => {
      this.lists = response;
    })
  }
}
