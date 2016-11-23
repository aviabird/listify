import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as authActions from './actions/auth';

// Firebase Modules
import { AngularFireModule } from 'angularfire2';

/**
 * App Containers
 */
import { AppComponent } from './containers/app.component';

// All Components Module
import { ComponentsModule } from './components';
import { LoginComponent } from './components/login/login.component';
import { FacebookLoginComponent } from './components/login/facebook-login.component';

// Reducers
import reducer from './reducers/index';

// Effects
import { AuthEffects } from './effects/auth';

// Services
import { FacebookAuthService } from './services/facebook-auth.service';

// Dev Tools

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(AuthEffects),
    AngularFireModule.initializeApp(
      {
      apiKey: "AIzaSyB_0Z6nSJSdCLY7CbjvcLKAFBLJ45Nb3_Y",
      authDomain: "istalk-5ec3f.firebaseapp.com",
      databaseURL: "https://istalk-5ec3f.firebaseio.com",
      storageBucket: "istalk-5ec3f.appspot.com"
      }
    ),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
  ],
  providers: [FacebookAuthService, authActions.LoginFbAction],
  bootstrap: [AppComponent]
})
export class AppModule { }
