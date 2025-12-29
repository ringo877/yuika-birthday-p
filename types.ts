export interface Message {
  id: string;
  nickname: string;
  text: string;
  timestamp: number;
}

export enum StoryGenre {
  ISEKAI = '異世界転生',
  MAGIC = '魔法学園',
  MYSTERY = 'ミステリー',
  SF = 'SF・未来',
  FANTASY = '王道ファンタジー',
  DAILY = '日常・青春',
}
