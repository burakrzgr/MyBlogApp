
export interface BlogData {
    id: number;
    author: string;
    entryDate : Date;
    header : string;
    text? : string;
    imagePath?: string;
    comments:{
     loading:boolean,
     list? : string[] 
    }
  }
  