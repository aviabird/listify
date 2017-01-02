import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ist-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  onCloseClick(){
    this.close.emit();
  }

}
