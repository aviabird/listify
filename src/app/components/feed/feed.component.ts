import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../../models'

declare var $: any;

@Component({
  selector: 'ist-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  @Input() feed: any;
  @Output() favClicked = new EventEmitter();
  @Output() removeFavClicked = new EventEmitter();
  @Output() retweetClicked = new EventEmitter();
  /**Add to fav
   * 
   * Note: to Fav a tweet it needs a `id_str` not `id` of a tweet 
  */
  addtoFavClicked(){
    this.favClicked.emit(this.feed.id_str);
  }

  removeFromFavClicked(){
    this.removeFavClicked.emit(this.feed.id_str);
  }

  retweetBtnClicked(){
    this.retweetClicked.emit(this.feed.id_str);
  }

}
