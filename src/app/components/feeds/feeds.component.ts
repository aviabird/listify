import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { AppState, getAllFeeds } from '../../reducers';
import { FeedsActions } from '../../actions/feeds.actions';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'ist-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: Observable<any>;
  constructor(private store: Store<AppState>,
    private feedActions: FeedsActions,
    private router: Router) {
    this.feeds = this.store.select(getAllFeeds);
  }

  ngOnInit() {
    this.store.dispatch(this.feedActions.getAllFeeds());
  }

  /**
   * Dispatch a store action to add a particular 
   * feed to fav
   *
   *  @param feed
   */
  addToFav(feed){
    this.store.dispatch(this.feedActions.addFeedToFav(feed));
  }
  
  /**
   * Dispatch a store action to remove a particular 
   * feed from fav
   *
   *  @param feed
   */
  removeFromFav(feed){
    this.store.dispatch(this.feedActions.removeFeedFromFav(feed));
  }

  /**
   * Dispatch a store action to retweet a particular 
   * feed
   *
   *  @param feed  
   */
  retweet(feed){
    this.store.dispatch(this.feedActions.retweet(feed));
  }

}
