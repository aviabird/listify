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
  returnReply;
  constructor(private api: ApiService){
  }
  reply(value: any){
    this.api.reply(this.feed.id, value).subscribe(response => {
      console.log(response);
      this.returnReply = response.feed.text;
    })  
  }
}
