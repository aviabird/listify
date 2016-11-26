import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
/**
 * App Containers
 */
import { AppComponent } from './containers/app.component';

// All Components Module
import { ComponentsModule } from './components';
import { LoginComponent } from './components/login/login.component';
import { FacebookLoginComponent } from './components/login/facebook-login.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyB_0Z6nSJSdCLY7CbjvcLKAFBLJ45Nb3_Y",
  authDomain: "istalk-5ec3f.firebaseapp.com",
  databaseURL: "https://istalk-5ec3f.firebaseio.com",
  storageBucket: "istalk-5ec3f.appspot.com",
  messagingSenderId: "211546852493"
};


import {UserAuthService} from './services/user-auth.service';
import {UserAuthEffects} from './effects/user-auth';
import reducer from './reducers/index';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FacebookLoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig, {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
    }),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(UserAuthEffects),
    CommonModule
  ],
  providers: [UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
