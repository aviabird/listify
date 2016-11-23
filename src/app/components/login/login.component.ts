import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// Import authActions to form authentication
import * as authActions from '../../actions/auth';

// import default reducers
import * as fromRoot from '../../reducers';

@Component({
  selector: 'ist-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
  }

  signInUser(signinType: String){
    console.log("Login Clicked: ", signinType);
    if(signinType === 'facebook') {
      this.store.dispatch(new authActions.LoginFbAction());
    }
  }
}