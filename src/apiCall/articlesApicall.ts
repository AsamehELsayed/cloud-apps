import { Article } from "@prisma/client"

export async function getAllArticles(pageNumber:string | undefined):Promise<Article[]>{
    let response 
    if (pageNumber) {
      response =await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`,
          {cache:"no-store"}
        )
    }else{
     response =await fetch(`http://localhost:3000/api/articles`,
     {cache:"no-store"}
   )
    }
     if(!response.ok){
       throw new Error("faild to fetch Articales")
 
     }
     return response.json()
}
export async function getAritcleCount():Promise<number>{
     const response=await fetch('http://localhost:3000/api/articles/count')
    
     return response.json()
}
export async function getAritcleBySearch(search:string):Promise<number>{
  const response=await fetch(`http://localhost:3000/api/articles/search?searchText=${search}`)
 
  return response.json()
}