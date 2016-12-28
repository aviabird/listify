import { Base } from './base';
import { User } from './user';

export class Tweet extends Base {
  created_at: string
  text:       string;
  user:       User
}
