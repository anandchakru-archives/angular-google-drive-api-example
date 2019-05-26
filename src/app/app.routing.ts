import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../components/signin/signin.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuard } from '../infrastructure/sessions/loggedInGuard';


const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [LoggedInGuard] }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);