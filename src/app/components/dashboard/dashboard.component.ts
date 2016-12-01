import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookAuthService } from '../../services/facebook-auth.service';

@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  status;
  constructor(private facebookAuthService: FacebookAuthService,
              private router: Router) { 
  }

  ngOnInit() {
    console.log("Inside ng On Int");
    this.facebookAuthService.getAuthResponse()
    this.facebookAuthService.getLoginStatus();
  }

}
