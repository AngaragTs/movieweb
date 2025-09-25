"use client";

import Link from "next/link";
import { Poster } from "../_componants/poster";
import { useState, useEffect } from "react";

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
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (Loading) {
    return <div>...Loading</div>;
  }
  return (
    <div className="w-full h-210 mt-10 justify-center ">
      <div className="w-full h-9 flex-row flex justify-between  ">
        <p className="font-semibold">{heading}</p>
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
              image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          );
        })}

        {/* <Poster image="./images/santa.jpg" rate={"4"} title="Dear Santa" />
        <Poster
          image="./images/dragon.jpg"
          rate={"4"}
          title="How To Train Your Dragon Live Action"
        />
        <Poster image="./images/alien.jpg" rate={"4"} title="Alien Romulus" />
        <Poster image="./images/ashes.jpg" rate={"4"} title="From the Ashes" />
        <Poster image="./images/space.jpg" rate={"4"} title="Space Dog" />
        <Poster image="./images/order.jpg" rate={"4"} title="The Order" />
        <Poster image="./images/y2k.jpg" rate={"4"} title="Y2K" />
        <Poster
          image="./images/solo.jpg"
          rate={"4"}
          title="Solo Leveling: ReAwakening"
        />
        <Poster image="./images/get-away.jpg" rate={8} title="Get Away" />
        <Poster
          image="./images/sonic.jpg"
          rate={"4"}
          title="Sonic the Hedgehog 3"
        /> */}
      </div>
    </div>
  );
};
