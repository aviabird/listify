import { Component, Input } from '@angular/core';

@Component({
  selector: 'ist-fd-summary',
  templateUrl: './fd-summary.component.html',
  styleUrls: ['./fd-summary.component.css']
})
export class FdSummaryComponent {
  @Input() feed: any;
}
