"use client";
import { Genres } from "@/app/_componants/genres";
import { Poster } from "@/app/_componants/poster";
import { MovieGenres } from "@/app/_features/moviegenres";
import { useEffect, useState } from "react";
import { NoResult } from "./noresult";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const SearchAllResult = ({ value }) => {
  const [searchMovie, setSearchMovie] = useState([]);

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=1`,
      options
    );
    const jsonData = await data.json();
    console.log(jsonData, "this is search data");
    setSearchMovie(jsonData.results);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-[1440px]   m-auto flex gap-6">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-10 ">
          <p className="text-3xl font-semibold">Search result</p>
        </div>
        <p className="font-semibold text-xl">
          {searchMovie.length} Result for &quot;{value}&quot;
        </p>
        <div>
          <NoResult />
        </div>
        <div className="flex-wrap w-full h-full justify-around flex gap-3 mb-10">
          {searchMovie.map((movie, index) => {
            return (
              <Poster
                key={index}
                image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                title={movie.title}
                rate={movie.vote_average}
                movieId={movie.id}
              />
            );
          })}
        </div>
      </div>
      <div className=" flex justify-center border-1 border-[#E4E4E7]"></div>
      <div className="w-[300px] h-full">
        <div>
          <p className="font-semibold text-xl">Search by genre</p>
          <p className="font-normal text-base">See lists of movies by genre</p>
          <div className="w-120 flex flex-wrap gap-2">
            <MovieGenres />
          </div>
        </div>
      </div>
    </div>
  );
};
