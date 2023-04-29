import { NgFor } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conversation } from 'src/app/models/conversation.model';

@Component({
  selector: 'app-current-conversation',
  standalone: true,
  templateUrl: './current-conversation.component.html',
  styleUrls: ['./current-conversation.component.scss'],
  imports: [NgFor]
})
export class CurrentConversationComponent {
  route = inject(ActivatedRoute);
  conversation: Conversation | undefined = this.route.snapshot.data.conversation ;
}
