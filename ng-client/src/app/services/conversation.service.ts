import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, switchMap, map } from 'rxjs';
import { Conversation } from '../models/conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  firestore = inject(AngularFirestore);

  getUserConversations(): Observable<Conversation[]> {
    return inject(UserService).user$.pipe(
      switchMap((user) => {
        if (!user) {
          return [];
        }
        
        return this.firestore
          .collection<Conversation>('conversations', (ref) => ref.where('participants', 'array-contains', user.uid))
          .valueChanges({ idField: 'id' })
          .pipe(
            map((conversations) => {
              return conversations.map((conversation) => {
                return {
                  ...conversation,
                  createdAt: new Date(`${conversation.createdAt}`),
                };
              });
            })
          );
      })
    );
  }

  async createConversation(conversationData: Partial<Conversation>): Promise<void> {
    const user  = inject(UserService).user;
    const conversationRef = this.firestore.collection('conversations').doc();
    const conversationId = conversationRef.ref.id;
    const createdAt = new Date();
    
    const conversation: Conversation = {
      id: conversationId,
      title: conversationData.title || '',
      participants: conversationData.participants || [],
      assistantId: conversationData.assistantId || '',
      createdAt: createdAt,
      messages: conversationData.messages || [],
      createdBy: conversationData.createdBy || user()?.uid || '',
    };

    await conversationRef.set(conversation);
  }

  getConversationById(conversationId: string): Observable<Conversation | undefined> {
    return this.firestore
      .doc<Conversation>(`conversations/${conversationId}`)
      .valueChanges({ idField: 'id' })
      .pipe(
        map((conversation) => {
          if (!conversation) {
            return undefined;
          }

          return {
            ...conversation,
            createdAt: new Date(`${conversation.createdAt}`),
          };
        })
      );
  }
}
