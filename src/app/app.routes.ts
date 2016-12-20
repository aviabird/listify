import { Routes, RouterModule }  from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestEmailComponent } from './components/request-email/request-email.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { FeedsComponent } from './components/feeds/feeds.component';
/**
 * TODO: Create a Seperate Module for Dashbaord and its children
 * So as we can treat user dashboard as a seperate module.
 */
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'request-email', component: RequestEmailComponent },
    { path: 'dashboard', component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'feeds', pathMatch: 'full' },
        { path: 'feeds',
          component: FeedsComponent
        },
        { path: 'suggestions',
          component: SuggestionsComponent
        },
      ],
      canLoad: [AuthGuardService]
    }
];

export const routing = RouterModule.forRoot(routes);