import { Component, inject } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [TranslateModule]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  selectLanguage(lang: 'he' | 'en') {
    this.themeService.changeLangTo(lang);
  }

}
