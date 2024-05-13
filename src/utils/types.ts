
export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  articleId: number;
  userId: number;
  user:{username:string}
}

export type Article = {
  comment: any;
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export type JWTPayload={
    id:number ,
    username:string,
    isAdmin:boolean
}
