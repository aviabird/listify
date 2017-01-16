import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ist-suggested-lists',
  templateUrl: './suggested-lists.component.html',
  styleUrls: ['./suggested-lists.component.css']
})
export class SuggestedListsComponent {
  @Input() list;
  @Output() followClicked = new EventEmitter();
  @Output() unFollowClicked = new EventEmitter();
  
  followList(){
    this.followClicked.emit(this.list.id);
  }

  unFollowList(){
    this.unFollowClicked.emit(this.list.id);
  }
}
