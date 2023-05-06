import {Timestamp} from 'firebase/firestore';
import { Message } from './message.model';
export interface Conversation {
    id: string;
    title: string;
    createdAt: Date | Timestamp;
    createdBy: string; // User ID
    assistantId: string;
    participants: string[]; // Array of User IDs
    goal?: string;
    messages?: Message[];
    fileURLs?: string[]; // Optional field for file URL if the message contains a file
  }