/**Required Angular 2 Modules for Router */
import { Routes, RouterModule }  from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

/** Componets required for routing */
import { SuggestionsPageComponent } from './containers/suggestions-page/suggestions-page.component';
import { ListFeedPageComponent } from './containers/list-feed-page/list-feed-page.component';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { SignUpPageComponent } from './containers/signup-page/signu-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginPageComponent },
    { path: 'request-email', component: SignUpPageComponent },
    { path: 'dashboard', component: DashboardPageComponent,
      children: [
        { path: '', redirectTo: 'feeds', pathMatch: 'full' },
        { path: 'feeds',
          component: FeedsComponent,
          children: [
            { path: 'tweet/:tweet_id', component: FeedDetailComponent }
          ]
        },
        {
          path: 'feeds/:id',
          component: ListFeedPageComponent,
          children: [
            { path: 'tweet/:tweet_id', component: FeedDetailComponent }
          ]
        },
        { path: 'suggestions',
          component: SuggestionsPageComponent
        },
      ],
      canLoad: [AuthGuardService]
    }
];

export const routing = RouterModule.forRoot(routes);