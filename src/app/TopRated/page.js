"use client";
import { Poster } from "../_componants/poster";
import { useState, useEffect } from "react";
import { Header } from "../_features/Header";
import { Footer } from "../_features/Footer";
const apiLink =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function Home() {
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
    <div className="w-full h-210 mt-10 justify-center">
      <Header />
      <div className="w-full flex items-center justify-center">
        <div className="w-[1440px]">
          <div className="w-full h-9 flex-row ml-10 ">
            <p className="font-semibold"> Top Rated</p>
          </div>

          <div className="w-full  flex-wrap justify-around flex gap-5 p-5 ">
            {UpComingMoviesdata.map((movie, index) => {
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
  );
}
