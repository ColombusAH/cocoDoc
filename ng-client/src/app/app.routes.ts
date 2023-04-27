import { Route } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
export const appRoutes: Route[]=[
    {path: '', component: IntroComponent},
    {path:'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
    {path:'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)}
]