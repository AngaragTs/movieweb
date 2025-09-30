"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/app/_features/Header";
import { Starticon } from "@/app/icons/Staricon";
import { Footer } from "@/app/_features/Footer";
import { Genres } from "@/app/_componants/genres";
import { MovieInfo } from "./_features/MovieInfo";

export default function MovieDetail() {
  const param = useParams();
  const { id } = param;

  console.log(`this is param`, param);

  if (!id) {
    return <div>sth wrong</div>;
  }

  return (
    <div className="w-full h-210  justify-center ">
      <Header />
      <MovieInfo id={id} />
      <Footer />
    </div>
  );
}
