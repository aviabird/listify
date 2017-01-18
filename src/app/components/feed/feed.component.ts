import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../../models'

@Component({
  selector: 'ist-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  @Input() feed: Tweet;
  @Output() favClicked = new EventEmitter();
  
  /**Add to fav */
  favIconClicked(){
    this.favClicked.emit(this.feed);
  }
}
