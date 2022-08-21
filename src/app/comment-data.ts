export interface CommentData{
    enterNew?:boolean;
    loading:boolean;
    displayCount?:number;
    list? : {writer:string,text:string,submitDate?:Date,subComment?:CommentData}[] 
   }