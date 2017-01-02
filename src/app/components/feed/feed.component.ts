import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getSelectedUserListIdFeeds } from '../../reducers/index';
import { Subscription } from 'rxjs';
import { FeedsActions } from '../../actions/feeds.actions';

@Component({
  selector: 'ist-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  private subscription: Subscription;
  private userListId: string;
  feeds: Observable<any>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>,
              private feedsActions: FeedsActions) { 
    this.feeds = this.store.select(getSelectedUserListIdFeeds);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.userListId = params['id'];
        this.store.dispatch(this.feedsActions.getFeedsForId(this.userListId));
      })
  }
}
