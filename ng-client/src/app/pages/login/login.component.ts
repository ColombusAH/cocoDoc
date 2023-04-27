import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule ,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  afAuth = inject(AngularFireAuth);
  router = inject(Router);
  loginForm=new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle successful form submission
      console.log(this.loginForm.value);
    } else {
      // Handle form validation errors
      this.loginForm.markAllAsTouched();
    }
  }

  async signInWithGoogle() {
    try {
     await this.afAuth.signInWithPopup(new GoogleAuthProvider());
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }
  
}
