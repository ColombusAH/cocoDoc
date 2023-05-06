import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  document = inject(DOCUMENT);
  translate = inject(TranslateService);
  currentLang = signal<'EN'| 'HE'>('EN');

  

  changeLangTo(lang: 'he' | 'en') {
    this.translate.use(lang);
    if(lang === 'he') {
      this.currentLang.set('HE')
      this.changeLangDirection('rtl') ;
    } else {
      this.currentLang.set('EN')
      this.changeLangDirection('ltr') ;
    }
}
private changeLangDirection(dir: 'ltr' | 'rtl') {
  this.document.documentElement.dir = dir;
  
}
}
