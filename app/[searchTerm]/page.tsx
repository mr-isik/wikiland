import getWikiResults from "@/lib/get-wiki-results";
import React from "react";
import Item from "./components/item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export const generateMetadata = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) return { title: `${displayTerm} Not Found` };
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
};

const SearchResults = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="max-w-2xl rounded-md bg-zinc-800 mx-auto px-1 md:px-4 py-2 mt-10 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="text-xl p-2 font-semibold text-zinc-200">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
};

export default SearchResults;
