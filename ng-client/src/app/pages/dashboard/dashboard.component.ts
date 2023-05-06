import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ConversationListComponent } from 'src/app/components/conversation-list/conversation-list.component';
import { CurrentConversationComponent } from 'src/app/components/current-conversation/current-conversation.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { CreateChatFormComponent } from 'src/app/components/create-chat-form/create-chat-form.component';

import { UserService } from 'src/app/services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [TranslateModule,ConversationListComponent, CurrentConversationComponent, ModalComponent, CreateChatFormComponent, NgIf]
})
export class DashboardComponent {
   userSrv = inject(UserService);
   isModalOpen = signal(false);

   onModalClose() {
    this.isModalOpen.set(false);
    console.log('Modal closed');
   }
   
}
