import { Urls } from './urls';

export class Entities {
  constructor(
    public hashtags: Array<string>,
    public symbols: Array<string>,
    public urls: Urls[]
  ){ }

}