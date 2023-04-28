import {Timestamp} from 'firebase/firestore';
export interface Message {
    id: string;
    conversationId: string;
    content: string;
    createdAt: Date | Timestamp;
    senderId: string; // User ID or AI Assistant ID
    isFromAI?: boolean; // Optional flag to indicate if the message is from the AI Assistant
    fileURL?: string; // Optional field for file URL if the message contains a file
  }
  