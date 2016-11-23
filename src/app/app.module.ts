import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as authActions from './actions/auth';

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
    EffectsModule.run(AuthEffects)
  ],
  providers: [FacebookAuthService, authActions.LoginFbAction],
  bootstrap: [AppComponent]
})
export class AppModule { }
