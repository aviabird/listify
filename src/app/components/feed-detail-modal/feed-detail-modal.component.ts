import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selector: 'ist-feed-detail-modal',
  templateUrl: './feed-detail-modal.component.html',
  styleUrls: ['./feed-detail-modal.component.css']
})
export class FeedDetailModalComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  feed;
  feedId;
  constructor(public store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute,
              private feedActions: FeedsActions) {
    this.feed = this.store.select(getSelectedFeed)
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

  loadModal(){
    let that = this;
    $('.ui.modal').modal({
      onHide: function(){
        that.store.dispatch(back());
        $('.ui.modal').remove();
      }
    }).modal('show');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
