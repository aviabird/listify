import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/let';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import userAuth, * as fromUserAuth from './user-auth.reducer';

// Entire State of a App
export interface AppState {
    userAuth: fromUserAuth.AuthState
}

// Export all the reducers
export default compose(combineReducers)({
    userAuth: userAuth
});


export function getLoginState(){
    return (state$: Observable<AppState>) => state$
        .select(state => state.userAuth)
}
