import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { AppState, getTweets } from '../../reducers';
import { TweetsActions } from '../../actions/tweet.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ist-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: Observable<any>;
  constructor(private store: Store<AppState>,
              private tweetActions: TweetsActions) { 
    this.feeds = this.store.select(getTweets);
    }

  ngOnInit() {
    this.store.dispatch(this.tweetActions.get_all_feeds());
  }

}
