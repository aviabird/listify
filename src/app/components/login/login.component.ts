import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as authActions from '../../actions/auth'; //  authActions to perform authentication
import * as fromRoot from '../../reducers'; //  Default reducers
@Component({
  selector: 'ist-login',
  templateUrl: './login.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  user = {};
  constructor(private store: Store<fromRoot.AppState>)
    {}

  ngOnInit() {
  }

  // Signin User based on Type
  signInUser(signinType: String){
    console.log("Login Clicked: ", signinType);
    if(signinType === 'facebook') {
      this.store.dispatch(new authActions.LoginFbAction());
    }
    console.log("Back in Login Component");
}

}