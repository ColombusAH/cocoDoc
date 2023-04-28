import { Component, inject } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  toggleLangDirection() {
    this.themeService.toggleLangDirection();
  }

}
