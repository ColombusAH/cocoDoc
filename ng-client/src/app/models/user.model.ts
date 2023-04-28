export interface User {
    uid: string; // User ID from Firebase Auth
    displayName: string;
    email: string;
    photoURL?: string;
  }