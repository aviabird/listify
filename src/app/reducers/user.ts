import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';


// Export Custom Type
export type UserState = User;

// Initializer AuthStatus with default values
const initialState: UserState = {
    isSignedIn: false,
    fbToken: ""
};

// export function(state = initialState, action: Action): UserState {

    
// }
