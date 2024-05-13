export interface CreatedArticleDto{
    description: string;
    title:string,
}
export interface UpdateArticleDto{
    description?: string;
    title?:string,
}


export interface registerDto{
   username:string,
   email:string,
   password:string,
}

export interface loginDto{
    email:string,
    password:string,
 }