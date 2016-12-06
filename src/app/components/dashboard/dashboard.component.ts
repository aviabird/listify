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
  constructor(private router: Router, private fbService: FacebookAuthService) { 
    fbService.getUserProfile().subscribe();
  }
  
  ngOnInit() {
  }

}
