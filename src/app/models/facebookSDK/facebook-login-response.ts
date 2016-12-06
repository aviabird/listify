import { FacebookAuthResponse } from './facebook-auth-response';

export interface FacebookLoginResponse {
    authResponse: FacebookAuthResponse;
    status:       string; 
}