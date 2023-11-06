"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form className="flex gap-2 items-center h-10" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-zinc-900 w-full rounded-md border border-zinc-700 px-4 h-full text-white outline-none focus:border-indigo-600"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="text-zinc-100 bg-indigo-600 px-2 flex items-center justify-center h-full rounded-md hover:bg-indigo-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 30 30"
          fill="currentColor"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
      </button>
    </form>
  );
}
