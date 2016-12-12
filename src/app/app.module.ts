//========================= IStalk ========================================
/**
 * Core Modules and Libraries used in App. 
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// Satellier and App Configs
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { MyAuthConfig } from './config';
/**
 * ALL Services used in App.
 */
import { AuthGuardService } from './services/auth-guard.service';
import { FacebookService } from './services/facebook.service';


// import { FacebookSDK } from './sdk/facebook.sdk';
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
import { UserEffects } from './effects/user.effects';
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

import { 
  AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

/**
 * All Routes
 */
import { routing } from './app.routes';


const firebaseConfig = {
  apiKey: "AIzaSyB_0Z6nSJSdCLY7CbjvcLKAFBLJ45Nb3_Y",
  authDomain: "istalk-5ec3f.firebaseapp.com",
  databaseURL: "https://istalk-5ec3f.firebaseio.com",
  storageBucket: "istalk-5ec3f.appspot.com",
  messagingSenderId: "211546852493"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    CommonModule,
    Ng2UiAuthModule.getWithConfig(MyAuthConfig),
    routing,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(UserAuthEffects),
    EffectsModule.run(UserEffects)
  ],
  providers: [
    actions,
    FacebookService,
    AuthGuardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
