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
    try{
      $('.ui.modal').modal({
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

// loadModal(id){
//          console.log("Id is", id);
//        console.log("Klass is ", `.ui.modal.feedModal-${id}`);
//        let el = $(`.ui.modal.feedModal-${id}`); 
//        console.log("element is ", el);
//        if(el.length) {
//          el.modal({
//            onHide: function(){
//              that.store.dispatch(back());
//            }
//          }).modal('show');
//        } else {
//          console.log("Inside else condition");
//          $('.ui.modal').modal({
//            onHide: function(){
//              that.store.dispatch(back());
//            }
//          }).modal('show');
//        }
// }