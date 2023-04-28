import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [RouterModule, NavbarComponent],
})
export class LayoutComponent {
  userService = inject(UserService);
  logout() {
    this.userService.logout();
  }
}
