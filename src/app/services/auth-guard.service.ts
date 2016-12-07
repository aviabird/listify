import { Injectable } from '@angular/core';
import { Router, CanLoad, CanActivateChild, Route, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState, getLoginState } from '../reducers';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';


/**
 * Here we Override the CanActivate, CanLoad, CanActivateChild class methods
 * and use `guard` to return a boolean true or false depending on user login status.
 */
@Injectable()
export class AuthGuardService implements CanActivate, CanLoad, CanActivateChild  {

  constructor(private router: Router,
              private store: Store<AppState>) { }
  
  canLoad(route: Route): Observable<boolean>{
    return this.guard();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): Observable<boolean> {
    return this.guard();
  }

  canActivate(){
    return this.guard();
  }

  /**
   * `Take` 1 takes the only 1 value from the stream of events
   * and stop taking the furthur values. i.e is it just stops 
   * listening to the observable.
   * Ref. https://jsbin.com/xizixax/4/edit?html,js,console,output
   */
  guard(): Observable<boolean> {
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
