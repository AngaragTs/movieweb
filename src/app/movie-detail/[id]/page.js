"use client"
import { useParams } from "next/navigation"
import { useEffect } from "react"


export default function MovieDetail () {
   const param = useParams 
   const { id } = param
   if (id) {return <div>sth wrong</div>}

   const apiLink =
  "https://api.themoviedb.org/3/movie/${id}?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const getData = async () => {
    setLoading(true);
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();
    setUpComingMoviesData(jsonData.results);}
     useEffect(() => {
        getData();
      }, [id]);
    
    return (<div>asfdsfasdfdas</div>

    )}