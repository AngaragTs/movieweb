"use client";

import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Trailer = ({ id }) => {
  const [Trailer, setTrailer] = useState([]);
  const URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const MovieTrailer = async () => {
    const data = await fetch(URL, options);
    const jsonData = await data.json();
    setTrailer(jsonData.results);
  };

  useEffect(() => {
    MovieTrailer();
  }, [id]);

  return (
    <div className="w-280">
      <iframe
        width="800px"
        height="500px"
        src={`https://www.youtube.com/embed/${Trailer[0]?.key}`}
        title="Xiaomi 17 Pro Max review - Apple are you seeing this!?"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
