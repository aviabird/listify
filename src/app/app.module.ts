//========================= IStalk ========================================
/**
 * Core Modules and Libraries used in App. 
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RestangularModule } from 'ng2-restangular';
import { environment } from '../environments/environment';

/**Semantic UI */
import { NgSemanticModule } from 'ng-semantic';

/**
 * ALL Services used in App.
 */
import { AuthGuardService } from './services/auth-guard.service';
import { UserAuthService } from './services/user-auth.service';
import { ApiService } from './services/api.service';
//========================= NGRX Releated Imports ===========================

/**
 * Ngrx Store Modules
 */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';

/**
 * Effects Modules
 */
import { UserAuthEffects } from './effects/user-auth.effect';
import { UserEffects } from './effects/user.effects';
import { SuggestionEffects } from './effects/suggestion.effects';
import { TweetEffects } from './effects/tweet.effects';
import { UserListsEffects } from './effects/user-lists.effects';
/**
 * ALL Ngrx Actions that can be fired in app loaded as one.
 */
import actions from './actions';

/**
 * OverAll Reducer for all reducers in an app.
 */
import reducer from './reducers';

//======================================================================


/**
 * All Components in App.
 */
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/**
 * All Routes
 */
import { routing } from './app.routes';
import { RequestEmailComponent } from './components/request-email/request-email.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { SuggestedListComponent } from './components/suggested-list/suggested-list.component';
import { FeedComponent } from './components/feed/feed.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RequestEmailComponent,
    SuggestionsComponent,
    FeedsComponent,
    SuggestedListComponent,
    FeedComponent
  ],
  imports: [
    NgSemanticModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    CommonModule,
    routing,
    // Importing RestangularModule and making default configs for restanglar
    RestangularModule.forRoot((RestangularProvider) => {
      RestangularProvider.setBaseUrl(environment.baseUrl);
      RestangularProvider.setDefaultHeaders({'Content-Type':'application/json'});
      }
    ),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(UserAuthEffects),
    EffectsModule.run(UserEffects),
    EffectsModule.run(SuggestionEffects),
    EffectsModule.run(TweetEffects),
    EffectsModule.run(UserListsEffects)
  ],
  providers: [
    actions,
    UserAuthService,
    AuthGuardService,
    ApiService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
