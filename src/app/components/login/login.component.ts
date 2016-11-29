import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { LocalStorage } from '../../services/local-storage';
import { Router } from '@angular/router';

declare const FB:any;

@Component({
  selector: 'ist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LocalStorage]
})
export class LoginComponent implements OnInit {
  constructor(private _localSorage: LocalStorage,
              private router: Router) {
        FB.init({
            appId      : '112535305898047',
            cookie     : true,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
  }

  ngOnInit() {
    FB.getLoginStatus(response => {
        this.statusChangeCallback(response);
    });
  }

  signInUser(signinType: String){
    FB.login((response) => {
      this.statusChangeCallback(response);
    })
  }

  signOutUser(){
  }

  statusChangeCallback(resp) {
      if (resp.status === 'connected') {
          // connect here with your server for facebook login by passing access token given by facebook
          this._localSorage.setUser(resp);
          this.router.navigate(['/dashboard']);
      }else if (resp.status === 'not_authorized') {
          
      }else {
          
      }
    };
}