"use client";

import { Header } from "./_features/Header";
import { Hero } from "./_features/Hero";

import { Footer } from "./_features/Footer";
import { useEffect, useState } from "react";
import { UpComingMovieList } from "./_features/UpComingMovieList";
import { PopularMovieList } from "./_features/PopularMovieList";
import { TopRatedMovieList } from "./_features/TopRatedMovieList";

export default function Home() {
  return (
    <div className="w-[1440px] m-auto">
      <Header />
      <Hero />
      <UpComingMovieList heading={"Upcoming"} />
      <PopularMovieList heading={"Popular"} />
      <TopRatedMovieList heading={"Top Rated"} />
      <Footer />
    </div>
  );
}
