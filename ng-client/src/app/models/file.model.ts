import {Timestamp} from 'firebase/firestore';
export interface File {
    id: string;
    conversationId: string;
    uploaderId: string; // User ID
    createdAt: Date | Timestamp;
    fileURL: string;
    fileName: string;
    fileType: string;
  }