import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../models'

@Component({
  selector: 'ist-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  @Input() feed: Tweet;
  constructor() { }
  ngOnInit() {
  
  }

}
