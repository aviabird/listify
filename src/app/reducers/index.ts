import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/let';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import loginReducer, * as fromLogin from './login.reducer';

// Entire State of a App
export interface AppState {
    login: fromLogin.LoginState
}

// Export all the reducers
export default compose(combineReducers)({
    login: loginReducer
});


export function getLoginState(){
    return (state$: Observable<AppState>) => state$
        .select(state => state.login)
}