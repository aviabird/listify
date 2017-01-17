import {
  Component,
  AfterViewInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'ist-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('flyInUp', [
      state('in', style({ transform: 'translateY(-50%)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class ModalComponent {
}
