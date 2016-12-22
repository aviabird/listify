import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, getUserList } from '../../reducers/index';

@Component({
  selector: 'ist-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {
  userList$: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.userList$ = this.store.select(getUserList) 
   }

  ngOnInit() {
  }

}
