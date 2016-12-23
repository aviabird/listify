import { UserProfile } from './user-profile';
import { Base } from './base';
export class User extends Base {
  name:              string;
  screen_name:       string;
  profile_image_url: string;
}