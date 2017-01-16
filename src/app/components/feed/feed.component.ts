import { Component, Input } from '@angular/core';
import { Tweet } from '../../models'

@Component({
  selector: 'ist-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  @Input() feed: Tweet;
}
