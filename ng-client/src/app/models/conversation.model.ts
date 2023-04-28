import {Timestamp} from 'firebase/firestore';
import { Message } from './message.model';
export interface Conversation {
    id: string;
    title: string;
    createdAt: Date | Timestamp;
    createdBy: string; // User ID
    aiAssistantId: string;
    participants: string[]; // Array of User IDs
    goal?: string;
    messages?: Message[];
  }