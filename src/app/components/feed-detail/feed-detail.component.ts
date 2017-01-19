import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getSelectedFeed } from '../../reducers/index';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FeedsActions } from '../../actions/feeds.actions';
import { back } from '@ngrx/router-store';

declare var $: any;

@Component({
  selector: 'ist-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  feed: Observable<any>;
  feedId: any;
  constructor(public store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute,
              private feedActions: FeedsActions) {
    this.feed = this.store.select(getSelectedFeed);
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.feedId = params['tweet_id'];
        this.store.dispatch(this.feedActions.selectFeed(this.feedId));
      }
    );
    this.loadModal();
  }

  reply(messageWithFeedId: any){
    this.store.dispatch(this.feedActions.reply(messageWithFeedId));
  }

  loadModal(){
    let that = this;
    try{
      $('.ui.modal').modal({
        onApprove : function() { return false; },
        onHide: function(){
          that.store.dispatch(back());
          $('.ui.modal').remove();
        }
      }).modal('show');
    } catch(e) {

      console.log("Error is",e);
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}