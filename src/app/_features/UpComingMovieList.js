"use client";

import Link from "next/link";
import { Poster } from "../_componants/poster";
import { useState, useEffect } from "react";
import { Loader } from "../_componants/loader";

const apiLink =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const UpComingMovieList = (props) => {
  const { heading } = props;

  const [UpComingMoviesdata, setUpComingMoviesData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const [count, setCount] = useState(0);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setUpComingMoviesData(jsonData.results);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  if (Loading) {
    return (
      <div className="w-[1440px] h-210  flex  flex-wrap justify-around gap-5">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-full h-210 mt-10 justify-center ">
      <div className="w-full h-9 flex-row flex justify-evenly  ">
        <p className="w-320 font-semibold">{heading}</p>
        <Link href={"/UpComing"}>
          <button className="cursor-pointer">See more</button>
        </Link>
      </div>

      <div className="w-full h-200 flex-wrap justify-around flex gap-5 ">
        {UpComingMoviesdata.slice(0, 10).map((movie, index) => {
          return (
            <Poster
              key={index}
              title={movie.title}
              rate={movie.vote_average}
              movieId={movie.id}
              image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};
