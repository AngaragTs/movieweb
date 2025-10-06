"use client";

import { Smallicon } from "../icons/smallicon";
import { MovieZ } from "../icons/MoiveZ";
import { DownIcon } from "../icons/DownIcon";
import { GenrePopUp } from "./GenrePopUp";
import { useState } from "react";
import { PopUpFeauture } from "./PopUpFeature";

export const Header = () => {
  const [openGenre, setOpenGenre] = useState(false);
  4;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
    },
  };
  const apiLink =
    "https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}";
  return (
    <div className="w-full h-20 flex-row  flex justify-evenly items-center z-20 relative ">
      <div className="h-5 w-25 flex items-center gap-2">
        <Smallicon />
        <MovieZ />
      </div>

      <div className="w-150 h-9 flex gap-2 flex-col">
        <div className="flex gap-2">
          <div>
            <button
              className="w-24 h-9 border-1 border-[#E4E4E7] cursor-pointer rounded-xl items-center justify-evenly flex "
              onClick={() => setOpenGenre(!openGenre)}
            >
              <DownIcon />
              <p className="w-10 h-6 font-[400]">Genre</p>
            </button>
          </div>

          <div className="flex-row flex h-9 w-94 border-1 border-[#E4E4E7] rounded-xl p-1 items-center">
            <img className="w-4 h-4 " src="../images/SearchIcon.jpg"></img>

            <input
              placeholder="Search..."
              className="h-9 w-60 gap-1 outline-0"
            ></input>
          </div>
        </div>
        {openGenre && <GenrePopUp />}
      </div>

      <button className="cursor-pointer">
        <img src="../images/icon2.jpg"></img>
      </button>
    </div>
  );
};
