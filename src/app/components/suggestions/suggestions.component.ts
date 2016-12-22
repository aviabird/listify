import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getSuggestedList } from '../../reducers/index';
import { SuggestionsActions } from '../../actions/suggestions.actions';
import { SuggestedList } from '../../models/suggested-list';

@Component({
  selector: 'ist-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  providers: [ApiService]
})
export class SuggestionsComponent implements OnInit {
  suggestedList$: Observable<any>;

  constructor(private api: ApiService,
              private router: Router,
              private suggestionsActions: SuggestionsActions,
              private store: Store<AppState>) { 
    this.suggestedList$ = this.store.select(getSuggestedList);
}

  ngOnInit() {
    this.store.dispatch(this.suggestionsActions.retriveLists())
  }

  follow(listId){
    this.store.dispatch(this.suggestionsActions.follow(listId));
  }

  goToFeedsDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
