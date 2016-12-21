import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getUserListState } from '../../reducers/index';
import { UserList } from '../../models';

@Component({
  selector: 'ist-suggested-list',
  templateUrl: './suggested-list.component.html',
  styleUrls: ['./suggested-list.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuggestedListComponent implements OnInit {
  @Input() list;
  @Output() followClicked = new EventEmitter();
  @Input() isFollowing$: Observable<boolean> = Observable.of(false);

  constructor(private store: Store<AppState>) {
    
    this.store.let(getUserListState())
      .subscribe(state => {
        state.forEach(element => {
          if(element.list_id.$oid === this.list.id.$oid){
            this.isFollowing$ = Observable.of(true);
          }
        })
      })
   }

  ngOnInit() {
  }

  followList(){
    this.followClicked.emit(this.list.id)
  }

}
