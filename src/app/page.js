"use client";

import { Header } from "./_features/Header";
import { Hero } from "./_features/Hero";
import { MovieList } from "./_features/MovieList";
import { Footer } from "./_features/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="w-[1440px] m-auto">
      <Header />
      <Hero />
      <MovieList heading={"Upcoming"} />
      <MovieList heading={"Popular"} />
      <MovieList heading={"Top Rated"} />
      <Footer />
    </div>
  );
}
