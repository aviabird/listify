import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// All actions
import actions from './actions';

// All Reducers
import reducer from './reducers';

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
import { LoginEffects } from './effects/login.effect';

/**
 * App Containers
 */
import { AppComponent } from './containers/app.component';

// All Components Module
import { ComponentsModule } from './components';
import { LoginComponent } from './components/login/login.component';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { routing } from './app.routes';
import { FacebookAuthService } from './services/facebook-auth.service';

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
    EffectsModule.run(LoginEffects)
  ],
  providers: [
    actions,
    FacebookAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
