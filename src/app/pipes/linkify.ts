import { Pipe, PipeTransform } from '@angular/core';
import { Urls } from '../models';

@Pipe({name: 'linkify'})
export class LinkifyPipe implements PipeTransform {
  
  transform(text: string, urls: Urls[] ): string {
    return this.linkify(text, urls)
  }

  private linkify(text: string, urls: Urls[]): any {
    var replacedText = text;
    urls.forEach(el => {
      replacedText = replacedText.replace(el.url, '<a href="' + el.url + '">' + el.display_url + '</a>')
    })
    return replacedText;
  }
}