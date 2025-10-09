"use client";
import { useState, useEffect } from "react";
import { Genres } from "../_componants/genres";

const apiLink = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const MovieGenres = () => {
  const [genredata, setGenreData] = useState([]);
  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setGenreData(jsonData.genres);
  };
  console.log("asdsadasd", genredata);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full  max-h-fit">
      {/* <div className="w-53 h-15">
        <p className="font-semibold text-2xl">Genres</p>
        <p className="text-base font-normal">See lists of movies by genre</p>
      </div> */}
      <div className="w-full h-0.2 border-1 border-[#E4E4E7]"></div>
      <div className="w-full flex flex-wrap gap-2 ">
        {genredata.map((genres, index) => {
          return (
            <Genres button={genres.name} key={index} genreId={genres.id} />
          );
        })}
      </div>
    </div>
  );
};
