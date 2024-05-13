import { Article } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface ArticlesItemsProps {
  item: Article;
  route: string;
}
const ArticlesItem = ({ item, route }: ArticlesItemsProps) => {
  return (
    <div className="rounded m-4 p-4 bg-slate-800 hover:bg-slate-900 lg:w-1/4 shadow-lg hover:w-1/3 transition-all duration-300 ">
      <h1 className="font-black text-blue-800 line-clamp-1">{item.title}</h1>
      <p className="font-light line-clamp-2 m-5 text-white">
        {item.description}
      </p>
      {route === "search" ? (
        <Link href={`./${item.id}`} className="text-white bg-blue-500 rounded p-3 block w-full hover:bg-blue-600">
          Learn more
        </Link>
      ) : (
        <Link href={`./${route}/${item.id}`} className="text-white bg-blue-500 rounded p-3 block w-full hover:bg-blue-600">
          Learn more
        </Link>
      )}
    </div>
  );
};

export default ArticlesItem;
