import { CustomConfig } from 'ng2-ui-auth';

export const FACEBOOK_CLIENT_ID = '112535305898047'

/**
 * @class MyAuthConfig Custom config which stores your app ids.
 * Extended with `CustomConfig` satellizer class
 */
export class MyAuthConfig extends CustomConfig {
    defaultHeaders = { 'content-Type': 'application/json' };
    providers = { facebook: { clientId: FACEBOOK_CLIENT_ID }};
}