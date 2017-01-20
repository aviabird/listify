import { FeedsActions } from './../../../actions/feeds.actions';
import { ApiService } from './../../../services/api.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ist-fd-summary',
  templateUrl: './fd-summary.component.html',
  styleUrls: ['./fd-summary.component.css']
})
export class FdSummaryComponent {
  @Input() feed: any;
  @Output() replyClicked = new EventEmitter();
  mentions;
  constructor(private api: ApiService){
  }
  
  reply(message: any){
    var payload = { feed: this.feed, message: message}
    this.replyClicked.emit(payload);
  }
}
