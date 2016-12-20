import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, getUserListState } from '../../reducers/index';
import { UserList } from '../../models';
@Component({
  selector: 'ist-suggested-list',
  templateUrl: './suggested-list.component.html',
  styleUrls: ['./suggested-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuggestedListComponent implements OnInit {
  @Input() list;
  @Output() followClicked = new EventEmitter();
  isFollowing$: Observable<boolean> = Observable.of(false);

  constructor(private store: Store<AppState>) {
    this.store.let(getUserListState())
      .subscribe(state => {
        console.log("State is", state);
        state.forEach(element => {
          if(element.list_id.$oid === this.list.id.$oid){
            this.isFollowing$ = Observable.of(true);
            console.log("is followLing", this.isFollowing$)
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
