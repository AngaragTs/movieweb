"use client";
import { Starticon } from "@/app/icons/Staricon";
import { Genres } from "@/app/_componants/genres";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader } from "@/app/_componants/loader";
import { HeroLoader } from "@/app/_componants/heroloader";
import { Poster } from "@/app/_componants/poster";
import { Trailer } from "@/app/_features/trailer";
import Link from "next/link";
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
  const [MovieStardata, setMoviesActorData] = useState();
  const [MoreMovies, setMoreMoviesDatas] = useState();
  const [Loading, setLoading] = useState(false);
  const [trailer, setTrailer] = useState(false);
  const getData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const jsonData = await data.json();
    setMoviesData(jsonData);
    console.log("moviedata", jsonData);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };
  const GetActorData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3//movie/${id}/credits?language=en-US`,
      options
    );
    const jsonData = await data.json();
    setMoviesDatas(jsonData);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };
  const GetStarsData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3//movie/${id}/credits?language=en-US`,
      options
    );
    const jsonData = await data.json();
    setMoviesActorData(jsonData);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const setMoreMovies = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3//movie/${id}/similar?language=en-US&page=1`,
      options
    );
    const jsonData = await data.json();
    setMoreMoviesDatas(jsonData.results);
    console.log("this is more", jsonData.results);

    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  // const MovieTrailer = async () => {
  //   setLoading(true);
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  //     options
  //   );
  //   const jsonData = await data.json();
  //   setTrailer(jsonData.results);
  //   console.log("this is more", jsonData.results);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  // };

  // useEffect(() => {
  //   MovieTrailer();
  // }, []);

  useEffect(() => {
    GetStarsData();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    GetActorData();
  }, []);

  useEffect(() => {
    setMoreMovies();
  }, []);

  if (Loading) {
    return (
      <div className="w-[1440px] h-210 m-auto justify-center items-center">
        <HeroLoader />
      </div>
    );
  }
  console.log(Moviesdatas);
  return (
    <>
      {Moviesdata && (
        <div className="w-[1440px] m-auto gap-5">
          <div className="w-full h-140 m-auto">
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
            <div className="flex gap-10 justify- items-end">
              <img
                src={`https://image.tmdb.org/t/p/original/${Moviesdata.poster_path}`}
                className="w-100 h-[428px]"
              ></img>
              <img
                src={`https://image.tmdb.org/t/p/original/${Moviesdata.backdrop_path}`}
                className="w-300 h-[428px] flex  "
              ></img>
              <div className="w-[1000px]  absolute flex justify-center items-center mb-10">
                <button
                  className="h-10 w-36 bg-emerald-100 cursor-pointer rounded-xl"
                  onClick={() => {
                    setTrailer(!trailer);
                  }}
                >
                  <p className="text-black">Watch Trailer</p>
                </button>
              </div>
              <div className="w-full absolute">
                {trailer && <Trailer id={id} />}
              </div>
            </div>
          </div>
          <div className="w-full h-20 flex flex-row  gap-5">
            {Moviesdata?.genres?.map((genres, index) => {
              return <Genres button={genres.name} key={index} />;
            })}
          </div>

          <div className="  m-auto ">
            <div className="w-120 flex flex-wrap gap-2 "></div>

            <p>{Moviesdata.overview}</p>
          </div>
        </div>
      )}
      {Moviesdatas && (
        <div className="w-360 mt-10 m-auto ">
          <div className=" h-7 w-280 flex gap-10">
            <p className="font-bold">Director</p>
            {MovieStardata.crew?.slice(5, 7).map((item, index) => {
              return <span key={index}>{item.name}</span>;
            })}
          </div>
          <div className="w-full h-0.2 border-1 border-[#E4E4E7]"></div>
          <div className=" h-7 w-280 flex gap-10">
            <p className="font-bold">Writers</p>

            {Moviesdatas.crew?.slice(0, 5).map((item, index) => {
              return <span key={index}>{item.name}</span>;
            })}
          </div>
          <div className="w-full h-0.2 border-1 border-[#E4E4E7]"></div>
          <div className=" h-7 w-280 flex gap-10">
            <p className="font-bold">Stars</p>
            {Moviesdatas.cast?.slice(0, 5).map((item, index) => {
              return <span key={index}>{item.name}</span>;
            })}
          </div>
          <div className="w-full h-0.2 border-1 border-[#E4E4E7]"></div>
        </div>
      )}
      <div className="w-[1440px] h-100 flex flex-col m-auto mb-10 mt-10">
        <div className="w-full flex ">
          <div className="w-[50%]">
            <p className="text-2xl font-semibold">More like this</p>
          </div>
          <div className="w-[50%] flex justify-end">
            <Link href={`/morelike/?id=${id}`}>
              <button className="font-medium text-sm cursor-pointer">
                See more
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex gap-18 mt-10 mb-10">
          {MoreMovies?.slice(0, 5).map((movie, index) => {
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
    </>
  );
};
