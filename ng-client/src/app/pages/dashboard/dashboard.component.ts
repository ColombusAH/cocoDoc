import { Component, inject } from '@angular/core';
import { ConversationListComponent } from 'src/app/components/conversation-list/conversation-list.component';
import { CurrentConversationComponent } from 'src/app/components/current-conversation/current-conversation.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [ConversationListComponent, CurrentConversationComponent]
})
export class DashboardComponent {
   userSrv = inject(UserService);
}
