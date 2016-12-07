import { type } from '../util';
import { Action } from '@ngrx/store';
import { UserAuth } from '../models';
/**
 * A Hash Constant which has all types of Login Action
 * { key: type } 
 */
export const ActionTypes = {
    LOGIN:          type("Login"),
    LOGIN_SUCCESS:  type("Login Success"),
    LOGOUT:         type('Logout'),
    LOGOUT_SUCCESS: type('Logout Success')
}

/**
 * List of all functions i.e action that can be
 * performed while logging in a user;
 */
export class LoginActions {
    /**
     * Returns an action.
     * 
     * @param provider: a string to specify the social media from which the user is logging in. E.g: 'facebook'
     * @return {Action} an Action with type 'Login' and a payload provider 
     */
    login(provider: string): Action {
        return {
            type: ActionTypes.LOGIN,
            payload: provider
        };
    }

    /**
     * Returns an Action.
     * 
     * Note : taking user_auth as input and returning user as a payload
     * which latter a reducer stores it in a state.
     * There is an another approach where we take a loginResponse
     * as whole and then in reducer we disect it and retrive user
     * details.
     * 
     * TODO: Discuss the above two approach with the team.
     * and implement the elegant one.
     *
     * Note: Ignore the above message, currently takking login response
     * as payload.
     * 
     * @param loginData: Data of type any received after login a user
     * @return {Action} an Action with type 'Login Success'
     * 
     */
    loginSuccess(response: any): Action {
        return {
            type: ActionTypes.LOGIN_SUCCESS,
            payload: response
        }
    }
 
    /**
     * Returns an Action
     * 
     * @return {Action} an Action with type 'Logout'
     */
    logout(): Action {
        return {
            type: ActionTypes.LOGOUT
        }
    }
    
    /**
     * Returns an Action
     * 
     * @return {Action} an Action with type 'Logout Success'
     */
    logoutSuccess(): Action {
        return {
            type: ActionTypes.LOGOUT_SUCCESS
        }
    }

}