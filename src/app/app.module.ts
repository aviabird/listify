//========================= IStalk ========================================
/**
 * Core Modules and Libraries used in App. 
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

/**
 * ALL Services used in App.
 */
import { AuthGuardService } from './services/auth-guard.service';
import { FacebookService } from './services/facebook.service';
import { FacebookSDK } from './sdk/facebook.sdk';
//========================= NGRX Releated Imports ===========================

/**
 * Ngrx Store Modules
 */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { EffectsModule } from '@ngrx/effects';

/**
 * Effects Modules
 */
import { UserAuthEffects } from './effects/user-auth.effect';

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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    CommonModule,
    routing,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(UserAuthEffects)
  ],
  providers: [
    actions,
    FacebookSDK,
    FacebookService,
    AuthGuardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
