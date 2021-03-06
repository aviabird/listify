import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getSelectedUserListIdFeeds } from '../../reducers/index';
import { Subscription } from 'rxjs';
import { FeedsActions } from '../../actions/feeds.actions';

@Component({
  selector: 'ist-list-feed-page',
  templateUrl: './list-feed-page.component.html',
  styleUrls: ['./list-feed-page.component.css']
})
export class ListFeedPageComponent implements OnInit {
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

  /**
   * Dispatch a store action to add a particular 
   * feed to fav
   *
   *  @param feed
   */
  addToFav(feed){
    this.store.dispatch(this.feedsActions.addFeedToFav(feed));
  }
  
  /**
   * Dispatch a store action to remove a particular 
   * feed from fav
   *
   *  @param feed
   */
  removeFromFav(feed){
    this.store.dispatch(this.feedsActions.removeFeedFromFav(feed));
  }

  /**
   * Dispatch a store action to retweet a particular 
   * feed
   *
   *  @param feed  
   */
  retweet(feed){
    this.store.dispatch(this.feedsActions.retweet(feed));
  }


}
