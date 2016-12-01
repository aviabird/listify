import { Injectable } from '@angular/core';
import { Router, CanLoad, CanActivateChild, Route, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState, getLoginState } from '../reducers';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private store: Store<AppState>) { }
  
  canLoad(route: Route): Observable<boolean>{
    console.log("Inside can Load")
    return this.guard();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): Observable<boolean> {
    return this.guard();
  }

  canActivate(){
    return this.guard();
  }

  guard(): Observable<boolean> {
    console.log("Inside guard")
    return this.store.let(getLoginState())
      .filter(state => state.isLoggedIn != null)
      .take(1)
      .map(state => state.isLoggedIn ? true: this.handleAuthFail())
  }
  
  handleAuthFail(){
    this.router.navigate(['/login']);
    return false;
  }

}
