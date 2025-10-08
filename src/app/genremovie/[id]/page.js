"use client";

import { Footer } from "@/app/_features/Footer";
import { Header } from "@/app/_features/Header";
import { useParams } from "next/navigation";
import { GenreMovies } from "./_feature/genremovies";
export default function GenreMovie() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <Header />
      <GenreMovies id={id} />
      <Footer />
    </div>
  );
}
