import { Base } from './base';
import { User } from './user';
import { Entities } from './entities';
export class Tweet extends Base {
  created_at:     string
  text:           string;
  retweet_count:  number;
  favorite_count: number;
  user:           User;
  user_list_id:   string;
  entities:       Entities;
}
