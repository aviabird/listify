import { Urls } from './urls';
import { Base } from './base';
export class Entities extends Base{
  public hashtags: Array<string>;
  public symbols: Array<string>;
  public urls: Urls[]
}