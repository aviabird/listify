import { UserProfile } from './user-profile';
import { Base } from './base';
import { Entities } from './entities';

export class User extends Base {
  name:              string;
  screen_name:       string;
  profile_image_url: string;
  description:       string;
  location:          string;  
  entities:          Entities;
}