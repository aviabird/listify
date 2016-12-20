import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ist-suggested-list',
  templateUrl: './suggested-list.component.html',
  styleUrls: ['./suggested-list.component.css']
})
export class SuggestedListComponent implements OnInit {
  @Input() list;
  @Output() followClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  followList(){
    this.followClicked.emit(this.list.id)
  }

}
