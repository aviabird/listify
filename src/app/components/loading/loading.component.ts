import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'ist-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean;
  constructor() {
      console.log("Inside Loading Component")
   }

  ngOnInit() {
    console.log("Inside Loading Component INIT")
  }

}

export class LoadingPage {
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}
