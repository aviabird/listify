import { CustomConfig } from 'ng2-ui-auth';

export const FACEBOOK_CLIENT_ID = '112535305898047'
export const INSTAGRAM_CLIENT_ID = '74828640bb79481984853df36f74ccab'
/**
 * @class MyAuthConfig Custom config which stores your app ids.
 * Extended with `CustomConfig` satellizer class
 */
export class MyAuthConfig extends CustomConfig {
    defaultHeaders = { 'content-Type': 'application/json' };
    providers = { 
      facebook: { clientId: FACEBOOK_CLIENT_ID, url: 'http://localhost:3000/api/auth/facebook' },
      instagram: {clientId: INSTAGRAM_CLIENT_ID, url: 'http://localhost:3000/api/auth/instagram' }
    };
}