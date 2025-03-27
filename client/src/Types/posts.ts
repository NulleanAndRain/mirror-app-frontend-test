export interface PostRaw {
  id: string;
  caption: string;
  permalink: string;
  date: string;
  likes: number;
  comments: number;
  userId: string;
}

export interface PostData {
  id: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
  userName: string;
}
