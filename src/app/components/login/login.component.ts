import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, getLoginState } from '../../reducers/index';
import { LoginActions } from '../../actions/login.actions';
import {AuthService} from 'ng2-ui-auth';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
  selector: 'ist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginActions]
})
export class LoginComponent implements OnInit {
  user;
  constructor(private loginActions: LoginActions,
              private store: Store<AppState>,
              private auth: AuthService,
              public af: AngularFire) {

  this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        console.log("Twitter", user)
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  ngOnInit() {
  }

  signInUser(signinType: string){
    this.auth.authenticate('twitter').subscribe({
        error: (err: any) => console.log("Error"),
        complete: () => console.log("complete")
    }
    )
  }

  login(){
   this.af.auth.login({
    provider: AuthProviders.Twitter
  });
  }
}