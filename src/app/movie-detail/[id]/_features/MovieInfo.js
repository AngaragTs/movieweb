"use client";
import { Starticon } from "@/app/icons/Staricon";
import { Genres } from "@/app/_componants/genres";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader } from "@/app/_componants/loader";
import { HeroLoader } from "@/app/_componants/heroloader";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const MovieInfo = ({ id }) => {
  const [Moviesdata, setMoviesData] = useState([]);
  const [Moviesdatas, setMoviesDatas] = useState();
  const [Loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const jsonData = await data.json();
    setMoviesData(jsonData);
    console.log(jsonData);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const GetActorData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const jsonData = await data.json();
    setMoviesDatas(jsonData);
    console.log(jsonData);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    GetActorData();
  }, []);
  if (Loading) {
    return (
      <div className="w-[1440px] h-210 m-auto justify-center items-center">
        <HeroLoader />
      </div>
    );
  }

  return (
    <>
      {Moviesdata && (
        <div>
          <div className="w-[1440px] h-140 m-auto">
            <div>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-4xl">{Moviesdata.title}</p>
                  <p>{Moviesdata.release_date}</p>
                </div>
                <div>
                  <p className="font-medium text-xs">Rating</p>
                  <div className="flex">
                    <Starticon />
                    <p className="flex">{Moviesdata.vote_average}</p>
                  </div>
                  <div>
                    <p className="text-[#71717A]">{Moviesdata.popularity}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 w-[1440px]">
              <img
                src={`https://image.tmdb.org/t/p/original/${Moviesdata.poster_path}`}
                className="w-20% h-[428px]"
              ></img>{" "}
              <img
                src={`https://image.tmdb.org/t/p/original/${Moviesdata.backdrop_path}`}
                className="w-70% h-[428px] flex"
              ></img>
            </div>
          </div>
          <div className="h-100 w-[1440px] m-auto mt-10">
            <div className="w-120 flex flex-wrap gap-2 ">
              {/* // <Genres button={"Action"} />
              // <Genres button={"Action"} />
              // <Genres button={"Action"} />
              // <Genres button={"Action"} />
              // <Genres button={"Action"} /> */}
            </div>
            <p>{Moviesdata.overview}</p>
          </div>
        </div>
      )}
      {Moviesdatas && (
        <div>
          <div className=" h-7 w-270 flex">
            <p className="font-bold">Director</p>
          </div>
          <div className="w-full h-0.2 border-1 border-[#E4E4E7]"></div>
          <div className=" h-7 w-270 flex">
            <p className="font-bold">Writers</p>
            {Moviesdatas.crew.slice(0, 2).map((item, index) => {
              return <span key={index}>{item.name}</span>;
            })}
          </div>
          <div className="w-full h-0.2 border-1 border-[#E4E4E7]"></div>
          <div className=" h-7 w-270 flex">
            <p className="font-bold">Stars</p>
            <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
          </div>
          <div className="w-full h-0.2 border-1 border-[#E4E4E7]"></div>
        </div>
      )}
    </>
  );
};
