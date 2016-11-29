import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs';

@Component({
  selector: 'ist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  signInUser(signinType: String){
  }

  signOutUser(){
  }
}