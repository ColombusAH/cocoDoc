import { Route } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { loggedInGuard } from './guards/logged-in.guard';
import { isLoggedOutGuard } from './guards/is-logged-out.guard';
import { LayoutComponent } from './components/layout/layout.component';
export const appRoutes: Route[]=[
    {
        path: 'intro',
        canActivate: [isLoggedOutGuard],
        loadComponent: () => import('./pages/intro/intro.component').then(m => m.IntroComponent)
    },
    {
        path:'login',
        canActivate: [isLoggedOutGuard],
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path:'signup',
        canActivate: [isLoggedOutGuard],
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)
    },
    {
        path: '',
        canActivate: [loggedInGuard],
        loadComponent: () => import('./components/layout/layout.component').then(m => m.LayoutComponent ),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
            }
                  ]
    },
    {path:'**', redirectTo: 'home'}
]