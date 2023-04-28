import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from 'src/app/services/theme.service';
import { UserService } from 'src/app/services/user.service';
import { faCoffee, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [TranslateModule, NgIf, FontAwesomeModule]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  userService = inject(UserService);
  currentLang = this.themeService.currentLang;
  profileIcon = faCoffee;
  gearIcon = faGear;
  logoutIcon = faRightFromBracket;
  selectLanguage(lang: 'he' | 'en') {
    this.themeService.changeLangTo(lang);
  }

  async logout() {
   await  this.userService.logout();
  }

}
