import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Auth } from '../models/auth';


// Export Custom Type
export type AuthState = Auth;

// Initializer AuthStatus with default values
const initialState: Auth = {
    status: "",
    authResponse: {
        accessToken:  "",
        expiresIn:    "",
        signedRequest:"",
        userID:       ""
    }
};

export function reducer(state = initialState, action: Action): any {
    switch(action.type) {
        default:
            console.log('here');
            return state
    }
}
