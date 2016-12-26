import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, getLoginState } from './reducers/index';
import { LoginActions } from './actions/login.actions';
import { UserAuthService } from './services/user-auth.service';


@Component({
  selector: 'ist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bikes;
  constructor(private router: Router,
              private loginActions: LoginActions,
              private store: Store<AppState>,
              private api: UserAuthService){
    
    this.store.let(getLoginState())
      .filter(state => state.server_token !== null)
      .subscribe(() => this.router.navigate(['/dashboard']));
  }
  ngOnInit(){
    this.api.getAllBikes().subscribe(response => {
      this.bikes = response
    })

  }
}
