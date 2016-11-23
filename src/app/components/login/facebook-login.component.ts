import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ist-facebook-login',
  templateUrl: './facebook-login.component.html'
})
export class FacebookLoginComponent implements OnInit {
  @Output() signIn = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onFacebookLoginClick(){
    console.log("Inside FB Login CLick");
    this.signIn.emit('facebook');
  }
}
