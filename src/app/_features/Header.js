"use client";

import { Smallicon } from "../icons/smallicon";
import { MovieZ } from "../icons/MoiveZ";
import { DownIcon } from "../icons/DownIcon";
import { GenrePopUp } from "./GenrePopUp";
import { useState } from "react";
import { PopUpFeauture } from "./PopUpFeature";

export const Header = () => {
  const [openGenre, setOpenGenre] = useState(false);

  return (
    <div className="w-full h-20 flex-row  flex justify-evenly items-center  ">
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
            <img className="w-4 h-4 " src="./images/SearchIcon.jpg"></img>

            <input
              placeholder="Search..."
              className="h-9 w-60 gap-1 outline-0"
            ></input>
          </div>
        </div>
        {openGenre && <GenrePopUp />}
      </div>

      <button className="cursor-pointer">
        <img src="./images/icon2.jpg"></img>
      </button>
    </div>
  );
};
