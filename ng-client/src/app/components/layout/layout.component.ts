import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [RouterModule],
})
export class LayoutComponent {
  userService = inject(UserService);
  logout() {
    this.userService.logout();
  }
}
