import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'ist-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  constructor(private _localSorage: LocalStorage) { 
  }

  ngOnInit() {
       this.user = this._localSorage.getUser();
       console.log("User is ", this.user);
  }

}
