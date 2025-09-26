"use client";

import { Sideicon } from "../icons/Sideicon";
import { OppositeSideIcon } from "../icons/OppositeSideIcon";

import { useState } from "react";
import { Starticon } from "../icons/Staricon";

const apiLink =
  "https://api.themoviedb.org/3//movie/now_playing?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const Hero = () => {
  const slides = [
    {
      src: "/images/head.jpg",
      title: "Wicked",
      rating: "8.2",
      description:
        "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
    },
    {
      src: "/images/gladiotar.jpg",
      title: "Gladiator",
      rating: "9.0",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    },
    {
      src: "/images/moana.jpg",
      title: "Moana",
      rating: "7.6",
      description:
        "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out Maui to set things right.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full h-[800px] relative overflow-hidden flex justify-center  items-center">
      <div
        className="flex transition-transform duration-500 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            className="w-full h-[800px] object-cover flex-shrink-0"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={handlePrev}
      >
        <OppositeSideIcon />
      </button>

      <div className="flex text-white flex-col justify-center w-[700px] pl-20 gap-5 absolute left-0 bottom-20">
        <div>
          <p className="text-base">Now Playing:</p>
          <p className="text-4xl font-bold">{currentSlide.title}</p>
          <p className="text-lg text-yellow-300">
            <Starticon /> {currentSlide.rating}
          </p>
        </div>

        <p className="text-base">{currentSlide.description}</p>

        <button className="h-10 w-36 bg-emerald-100 cursor-pointer rounded-xl">
          <p className="text-black">Watch Trailer</p>
        </button>
      </div>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        onClick={handleNext}
      >
        <Sideicon />
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
