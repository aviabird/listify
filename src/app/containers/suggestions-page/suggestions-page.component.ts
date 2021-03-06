import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getLists } from '../../reducers/index';
import { ListActions } from '../../actions/list.actions';
import { List } from '../../models/list';

@Component({
  selector: 'ist-suggestions-page',
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.css'],
  providers: [ApiService]
})
export class SuggestionsPageComponent implements OnInit {
  suggestedList$: Observable<any>;

  constructor(private api: ApiService,
              private router: Router,
              private listActions: ListActions,
              private store: Store<AppState>) { 
    this.suggestedList$ = this.store.select(getLists);
}

  ngOnInit() {
    this.store.dispatch(this.listActions.retriveLists())
  }

  follow(listId){
    this.store.dispatch(this.listActions.follow(listId));
  }

  unfollow(listId){
    this.store.dispatch(this.listActions.unFollowList(listId));
  }

  goToFeedsDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
