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
import { PipesModule } from './pipes';

/**Semantic UI */
import { NgSemanticModule } from 'ng-semantic';

/** ALL Services used in APP */
import { AuthGuardService } from './services/auth-guard.service';
import { UserAuthService } from './services/user-auth.service';
import { ApiService } from './services/api.service';
import { ResponseParseService } from './services/response-parse.service';

//========================= NGRX Releated Imports ===========================

/**
 * Ngrx Store Modules
 */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';

/** All SideEffects in APP */
import { UserAuthEffects } from './effects/user-auth.effect';
import { UserEffects } from './effects/user.effects';
import { ListEffects } from './effects/list.effects';
import { FeedsEffects } from './effects/feeds.effects';
import { UserListsEffects } from './effects/user-lists.effects';

/**ALL Ngrx Actions that can be fired in app loaded as one.*/
import actions from './actions';

/**Global Reducer of APP */
import reducer from './reducers';

//======================================================================

/**All Components in APP */
import { ComponentsModule } from './components';

/**All Routes in APP */
import { routing } from './app.routes';

/**All Containers in APP */
import { SignUpPageComponent } from './containers/signup-page/signu-page.component';
import { ListFeedPageComponent } from './containers/list-feed-page/list-feed-page.component';
import { SuggestionsPageComponent } from './containers/suggestions-page/suggestions-page.component';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AppComponent } from './containers/app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DashboardPageComponent,
    SuggestionsPageComponent,
    ListFeedPageComponent
  ],
  imports: [
    ComponentsModule,
    NgSemanticModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    PipesModule,
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
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(UserAuthEffects),
    EffectsModule.run(UserEffects),
    EffectsModule.run(ListEffects),
    EffectsModule.run(FeedsEffects),
    EffectsModule.run(UserListsEffects)
  ],
  providers: [
    actions,
    UserAuthService,
    AuthGuardService,
    ApiService,
    ResponseParseService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
