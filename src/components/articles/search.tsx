'use client'
import { getAritcleBySearch } from '@/apiCall/articlesApicall';
import {  useRouter } from 'next/navigation';
import React, { useState } from 'react';

  
const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/articles/search?searchText=${search}`)
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        className="my-4 w-1/2 text-center mx-auto bg-slate-700 rounded p-2 text-xl focus:bg-slate-800 focus:outline-none"
        type="search"
        placeholder="Search for articles"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;