import { ResolveFn, Router } from '@angular/router';
import { ConversationService } from '../services/conversation.service';
import { inject } from '@angular/core';
import { Conversation } from '../models/conversation.model';

export const currentConversationResolver: ResolveFn<Conversation | undefined> = (route, state) => {
  const conversationService = inject(ConversationService);
  const router = inject(Router);
  const conversationId = route.paramMap.get('id');
  console.log(conversationId);
  if (!conversationId) {
    router.navigate(['/home']);
  }
  return conversationService.getConversationById(conversationId!);
 
};
