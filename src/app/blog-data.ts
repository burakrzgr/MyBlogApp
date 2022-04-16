import { CommentData } from "./comment-data";

export interface BlogData {
    id: number;
    author: string;
    entryDate : Date;
    header : string;
    text? : string;
    imagePath?: string;
    comments: CommentData
  }
  