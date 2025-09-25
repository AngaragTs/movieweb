"use client"

import { Sideicon } from "../icons/Sideicon";
import {OppositeSideIcon} from "../icons/OppositeSideIcon"


import { useState } from "react";

export const Hero = () => {
  const images = [
    "/images/head.jpg",
    "/images/gladiotar.jpg",
    "/images/moana.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-[800px] relative overflow-hidden flex justify-center items-center ">
      {/* Container for sliding images */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-full h-[800px] object-cover flex-shrink-0"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Button to go to previous image */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={handlePrev}
      >
        <OppositeSideIcon/>
      </button>

      {/* Button to go to next image */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={handleNext}
      >
        <Sideicon/>
      </button>
    </div>
  );
};



    // <div className="w-full h-250 flex relative justify-between">
    //   <img
    //     className="w-full h-250 flex -z-1 absolute"
    //     src="./images/head.jpg"
    //   ></img>
    //   <div className="flex items-center w-full justify-end">
    //     <div className="flex text-white-50 text-white flex-col justify-center w-280 pl-20 gap-5">
    //       <div className="w-36">
    //         <p className="text-base">Now Playing:</p>
    //         <p className="text-4xl">Wicked</p>
    //         <p></p>
    //       </div>
    //       <div className="w-100 text-base">
    //         Elphaba, a misunderstood young woman because of her green skin, and
    //         Glinda, a popular girl, become friends at Shiz University in the
    //         Land of Oz. After an encounter with the Wonderful Wizard of Oz,
    //         their friendship reaches a crossroads.{" "}
    //       </div>
    //       <button className="h-10 w-36 bg-emerald-100 cursor-pointer rounded-xl">
    //         <p className="text-black">Watch Trailer</p>
    //       </button>
    //     </div>
    //     <div className="w-60 h-20 flex justify-end pr-10">
    //       <button
    //         className="rounded-xl bg-[#F4f4F5] h-10 w-10  
    //            justify-center flex cursor-pointer items-center"
    //       >
    //         <Sideicon />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  
