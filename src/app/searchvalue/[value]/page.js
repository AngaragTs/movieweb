"use client";

import { Footer } from "@/app/_features/Footer";
import { Header } from "@/app/_features/Header";
import { useParams } from "next/navigation";
import { SearchAllResult } from "./_feature/searchallresult";

export default function SearchResult() {
  const params = useParams();
  const { value } = params;

  return (
    <div>
      <Header />
      <SearchAllResult value={value} />
      <Footer />
    </div>
  );
}
