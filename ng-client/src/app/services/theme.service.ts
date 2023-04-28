import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  document = inject(DOCUMENT);
  translate = inject(TranslateService);

  

  changeLangTo(lang: 'he' | 'en') {
    this.translate.use(lang);
    if(lang === 'he') {
      this.changeLangDirection('rtl') ;
    } else {
      this.changeLangDirection('ltr') ;
    }
}
private changeLangDirection(dir: 'ltr' | 'rtl') {
  this.document.documentElement.dir = dir;
}
}
