export interface CommentData{
    enterNew?:boolean;
    loading:boolean;
    list? : {writer:string,text:string,submitDate?:Date}[] 
   }