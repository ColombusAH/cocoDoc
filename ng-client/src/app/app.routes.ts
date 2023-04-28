import { Route } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { loggedInGuard } from './guards/logged-in.guard';
import { isLoggedOutGuard } from './guards/is-logged-out.guard';
export const appRoutes: Route[]=[
    {path: 'intro',canActivate: [isLoggedOutGuard] , component: IntroComponent},
    {path:'login',canActivate: [isLoggedOutGuard] , loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
    {path:'signup',canActivate: [isLoggedOutGuard] , loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)},
    {path:'home',canActivate: [loggedInGuard] ,loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)},
    {path:'**', redirectTo: 'home'}
]