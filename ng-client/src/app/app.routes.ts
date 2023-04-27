import { Route } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { loggedInGuard } from './guards/logged-in.guard';
export const appRoutes: Route[]=[
    {path: 'intro', component: IntroComponent},
    {path:'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
    {path:'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)},
    {path:'home',canActivate: [loggedInGuard] ,loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)},
]