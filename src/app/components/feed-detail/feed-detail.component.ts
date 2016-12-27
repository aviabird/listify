import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ist-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {

  constructor() { }
  @Input() feed;
  ngOnInit() {
  }

}
