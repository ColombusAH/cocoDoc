import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Conversation } from 'src/app/models/conversation.model';

@Component({
  selector: 'app-current-conversation',
  standalone: true,
  templateUrl: './current-conversation.component.html',
  styleUrls: ['./current-conversation.component.scss'],
  imports: [NgFor]
})
export class CurrentConversationComponent {
@Input() conversation!: Conversation;
}
