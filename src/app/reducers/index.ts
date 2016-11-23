// Import Auth Reducer
import * as fromAuth from './auth'

// Import Compose and combineReducers
import { compose } from '@ngrx/core/compose'
import { combineReducers } from '@ngrx/store';


export interface AppState {
    auth: fromAuth.AuthState;
}

// Export all the imported reducers as default app reducer
export default compose(combineReducers)({
    auth: fromAuth.reducer
});