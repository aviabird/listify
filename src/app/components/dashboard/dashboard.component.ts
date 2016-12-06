import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { UserActions } from '../../actions/user.actions';
import { User } from '../../models/';
import { FacebookService } from '../../services/facebook.service';


@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user$: Observable<any>;
  profilePic$: Observable<any>;
  constructor(private router: Router,
              private userActions: UserActions,
              private store: Store<AppState>,
              private fb: FacebookService) {

    this.user$ = this.store.select('user');
    
    store.dispatch(userActions.loadProfile());
    /**
     * Dirty Implementation of getting a profile pic
     * TODO: Convert it into NGRX store pattern
     */
    this.fb.getUserProfilePic().subscribe(
      response => {
        this.profilePic$ = response.data.url;
      }
    );
  }
  
  ngOnInit() {
  }
}
