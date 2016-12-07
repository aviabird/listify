import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, getLoginState } from './reducers/index';
import { LoginActions } from './actions/login.actions';

@Component({
  selector: 'ist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
              private loginActions: LoginActions,
              private store: Store<AppState>){
    
    this.store.let(getLoginState())
      .filter(state => state.access_token !== null)
      .subscribe(() => this.router.navigate(['/dashboard']));
  }
  ngOnInit(){
  }
}
