import { CustomConfig } from 'ng2-ui-auth';

export const FACEBOOK_CLIENT_ID  = '112535305898047'
export const INSTAGRAM_CLIENT_ID = '0176e6141fff48c2b5781ff7a35c998e'
export const TWITTER_CLIENT_ID   = 'jvk7MJjrtveEZMoIyK3539kwi'
/**
 * @class MyAuthConfig Custom config which stores your app ids.
 * Extended with `CustomConfig` satellizer class
 */
export class MyAuthConfig extends CustomConfig {
    defaultHeaders = { 'content-Type': 'application/json' };
    baseUrl =  'http://localhost:3000/api'
    providers = { 
      facebook: { clientId: FACEBOOK_CLIENT_ID, url: 'http://localhost:3000/api/auth/facebook' },
      instagram: { clientId: INSTAGRAM_CLIENT_ID, url: 'http://localhost:3000/api/authorize/instagram' },
      twitter: { clientId: TWITTER_CLIENT_ID }
    };
}