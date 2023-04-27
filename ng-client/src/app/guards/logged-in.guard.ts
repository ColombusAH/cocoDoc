import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map, of } from 'rxjs';
import { UserService } from '../services/user.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const userSrv = inject(UserService);
  return  userSrv.user$.pipe(map(user => !!user && !!user.uid))  
};
