"use client";

import { useSearchParams } from "next/navigation";

import { MoreLikeMovies } from "../_features/morelikemovies";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div className="w-full h-210  justify-center">
      <MoreLikeMovies id={id} />
    </div>
  );
}
