import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { UserService } from '../services/user.service';

export const isLoggedOutGuard: CanActivateFn = (route, state) => {
  const userSrv = inject(UserService);
  const router = inject(Router);
   return  userSrv.user$.pipe(map(user => !user || !user.uid), tap(isLoggedOut =>
    !isLoggedOut ? router.navigate(['/home']) : null))
};
