import { Routes, RouterModule }  from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestEmailComponent } from './components/request-email/request-email.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { ListFeedComponent } from './components/list-feed/list-feed.component';
import { FeedDetailModalComponent } from './components/feed-detail-modal/feed-detail-modal.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'request-email', component: RequestEmailComponent },
    { path: 'dashboard', component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'feeds', pathMatch: 'full' },
        { path: 'feeds',
          component: FeedsComponent,
          children: [
            { path: 'tweet/:tweet_id', component: FeedDetailModalComponent }
          ]
        },
        {
          path: 'feeds/:id',
          component: ListFeedComponent
        },
        { path: 'suggestions',
          component: SuggestionsComponent
        },
      ],
      canLoad: [AuthGuardService]
    }
];

export const routing = RouterModule.forRoot(routes);