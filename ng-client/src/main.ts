import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from './app/app.routes';
import { environment } from './environments/environment.development';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: environment.firebaseConfig.FIREBASE_API_KEY,
        appId: environment.firebaseConfig.FIREBASE_APP_ID,
        authDomain: environment.firebaseConfig.FIREBASE_AUTH_DOMAIN,
        measurementId: environment.firebaseConfig.FIREBASE_MEASUREMENT_ID,
        messagingSenderId: environment.firebaseConfig.FIREBASE_MESSAGING_SENDER_ID,
        projectId: environment.firebaseConfig.FIREBASE_PROJECT_ID,
        storageBucket: environment.firebaseConfig.FIREBASE_STORAGE_BUCKET,
      })
    ),
    importProvidersFrom(AngularFireAuthModule),
    importProvidersFrom(AngularFireAuthModule),
    importProvidersFrom(AngularFirestoreModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom( TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }))
  ],
}).catch((err) => console.error(err));
