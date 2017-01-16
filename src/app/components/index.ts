import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes';

/** Components */
import { FeedComponent } from './feed/feed.component';
import { SuggestedListsComponent } from './suggested-lists/suggested-lists.component';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FeedsComponent } from './feeds/feeds.component';

export const COMPONENTS = [
  FeedComponent,
  FeedsComponent,
  ModalComponent,
  FeedDetailComponent,
  SuggestedListsComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }