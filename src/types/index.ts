export interface Word {
  id: number;
  gujarati: string;
  romanized: string;
  english: string;
  category: string;
  audio_url?: string;
}

export interface Phrase {
  id: number;
  gujarati: string;
  romanized: string;
  english: string;
  category: string;
}

export interface UserProgress {
  user_id: string;
  completed_words: number[];
  completed_phrases: number[];
} 