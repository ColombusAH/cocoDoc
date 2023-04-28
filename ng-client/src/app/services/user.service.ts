import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { toSignal } from "@angular/core/rxjs-interop";
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
afAuth = inject(AngularFireAuth);
user= toSignal(this.afAuth.authState);
user$= this.afAuth.authState;
router = inject(Router);

  async logout() {
   await this.afAuth.signOut();
   return this.router.navigate(['/login']);
}
}
