import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  document = inject(DOCUMENT);
  translate = inject(TranslateService);
  currentLang = signal<'English'| 'Hebrew'>('English');

  

  changeLangTo(lang: 'he' | 'en') {
    this.translate.use(lang);
    if(lang === 'he') {
      this.currentLang.set('Hebrew')
      this.changeLangDirection('rtl') ;
    } else {
      this.currentLang.set('English')
      this.changeLangDirection('ltr') ;
    }
}
private changeLangDirection(dir: 'ltr' | 'rtl') {
  this.document.documentElement.dir = dir;
  
}
}
