import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule ,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  afAuth = inject(AngularFireAuth);
  router = inject(Router);
  signupForm= new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.signupForm.valid) {
      // Handle successful form submission
      console.log(this.signupForm.value);
    } else {
      // Handle form validation errors
      this.signupForm.markAllAsTouched();
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
