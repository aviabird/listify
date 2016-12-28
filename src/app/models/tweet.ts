import { Base } from './base';
import { User } from './user';
import { Entities } from './entities';
export class Tweet extends Base {
  created_at: string
  text:       string;
  user:       User
  entities:   Entities;
}
