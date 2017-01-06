import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, isFollowing } from '../../reducers/index';
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
  @Output() unFollowClicked = new EventEmitter(); 
  isFollowing$ = Observable.of(false);

  constructor(private store: Store<AppState>) {
  
}

  ngOnInit() {
    this.isFollowing$ = this.store.select(isFollowing(this.list.id))
    // this.store.select(getUserListEntities).subscribe(
    //   userList => {
    //     for (var key in userList) {
    //         var value = userList[key];
    //         if(value.list_id.$oid === this.list.id){
    //           this.isFollowing$ = Observable.of(true);
    //         } else{
    //           console.log("list id is", this.list.id);
              
    //           this.isFollowing$ = Observable.of(false);
    //         }
    //     }
    //   }
    // )
  }

  followList(){
    this.followClicked.emit(this.list.id);
  }

  unFollowList(){
    this.unFollowClicked.emit(this.list.id);
  }

  isFollowingTheList(){

  }

}
