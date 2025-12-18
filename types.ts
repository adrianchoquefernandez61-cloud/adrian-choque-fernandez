
export interface SubTopic {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Topic {
  id: string;
  title: string;
  subTopics: SubTopic[];
  isCompleted: boolean;
}

export interface Module {
  id: string;
  name: string;
  topics: Topic[];
}

export interface FriendProgress {
  id: string;
  name: string;
  progress: number;
  avatar: string;
}

export interface SearchResult {
  text: string;
  sources: Array<{ title: string; uri: string }>;
}

export type EventType = 'study' | 'exam' | 'task' | 'presentation' | 'other';

export interface CalendarEvent {
  id: string;
  date: string; // ISO format YYYY-MM-DD
  title: string;
  type: EventType;
  description?: string;
  reminderSet: boolean;
  completed: boolean;
}
