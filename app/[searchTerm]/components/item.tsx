import Link from "next/link";
import React from "react";

type Props = {
  result: Result;
};

const Item = ({ result }: Props) => {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-lg md:text-xl font-semibold underline text-white"
        >
          {result.title}
        </Link>
      </h2>
      <p className="text-zinc-300 text-sm md:text-md">{result.extract}</p>
    </div>
  );

  const content = result?.thumbnail?.source ? (
    <article className="m-4 max-w-xl">
      <div className="flex flex-row gap-6 text-white">
        <div className="flex flex-col justify-center">
          <img
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width * 2}
            height={result.thumbnail.height * 2}
            className="rounded-md"
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  );

  return content;
};

export default Item;
