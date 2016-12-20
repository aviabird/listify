import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, getSuggestedListState } from '../../reducers/index';
import { SuggestionsActions } from '../../actions/suggestions.actions';
import { SuggestedList } from '../../models/suggested-list';

@Component({
  selector: 'ist-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  providers: [ApiService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuggestionsComponent implements OnInit {
  suggestedList$: Observable<any>;

  constructor(private api: ApiService,
              private router: Router,
              private suggestionsActions: SuggestionsActions,
              private store: Store<AppState>) { 
    this.suggestedList$ = this.store.let(getSuggestedListState());
  }

  ngOnInit() {
    this.store.dispatch(this.suggestionsActions.retriveLists())
  }

  follow(listId){
    console.log("List Id is,", listId);
    this.store.dispatch(this.suggestionsActions.follow(listId))
    // this.api.followList(listId).subscribe(response => {
    //   console.log("Response is: ", response);
    // })
  }

  goToFeedsDashboard(){
    this.router.navigate(['/dashboard'])
  }
}
