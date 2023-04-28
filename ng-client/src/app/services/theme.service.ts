import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  document = inject(DOCUMENT);

  toggleLangDirection() {
    if (this.document.documentElement.dir === 'rtl') {
      this.document.documentElement.dir = 'ltr';
    } else {
      this.document.documentElement.dir = 'rtl';
    }
  }


}
