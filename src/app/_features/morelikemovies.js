"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Poster } from "../_componants/poster";
import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const MoreLikeMovies = ({ id }) => {
  const [moviesdata, setMoviedata] = useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      options
    );
    const jsonData = await data.json();
    setMoviedata(jsonData.results);
    console.log("moviedathjhb", jsonData.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-210 mt-10 justify-center items-center">
      <Header />
      <div className="w-full flex items-center justify-center">
        <div className="w-[1440px]">
          <div className="w-[1440px] h-9 flex-row ml-10n justify-evenly items-center ml-26 ">
            <p className=" font-semibold"> Upcoming</p>
          </div>

          <div
            className="w-[1440px]  flex-wrap justify-center
            flex items-center gap-5 p-5 "
          >
            {moviesdata.map((movie, index) => {
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
      </div>
      <Footer />
    </div>
    // <div className="w-[1440px] h-210 mt-10 justify-center">
    //   <div className="w-full h-9 flex-row flex justify-evenly  ">
    //     <p className="w-320 font-semibold">More like</p>
    //   </div>

    //   <div className="w-full h-200 flex-wrap justify-around flex gap-5 ">
    //     {moviesdata.slice(0, 10)?.map((movie, index) => {
    //       return (
    //         <Poster
    //           key={index}
    //           title={movie.title}
    //           rate={movie.vote_average}
    //           movieId={movie.id}
    //           image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
  );
};
