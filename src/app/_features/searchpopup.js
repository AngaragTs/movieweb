"use client";

import Link from "next/link";
import { Sideicon } from "../icons/Sideicon";
import { Starticon } from "../icons/Staricon";
import { useRouter } from "next/navigation";
export const SearchPopUp = (props) => {
  const { moviesdatas, values } = props;
  const router = useRouter();
  const HandleResultClick = () => {
    router.push(`/searchvalue/${values}`);
  };

  return (
    <>
      {" "}
      <div className="bg-[#FFFFFF] rounded-2xl ">
        {moviesdatas.slice(0, 5).map((movie, index) => {
          return (
            <div key={index} className="w-full max-h-fit bg-white p-3">
              <div className="w-full max-h-fit flex justify-center gap-5">
                <div className="w-140 h-30 items-center flex gap-5">
                  <div>
                    <img
                      className="w-20 h-30"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    ></img>
                  </div>
                  <div className="w-100 h-15">
                    <div>
                      <p className="text-xl font-semibold">{movie.title}</p>
                      <div className="flex">
                        <Starticon />
                        <p>
                          {movie.vote_average}/
                          <span className="text-xs">10</span>
                        </p>
                      </div>
                    </div>

                    <div className="w-100 h-15 flex justify-around">
                      <div className="h-5 w-50">
                        <p>{movie.release_date}</p>
                      </div>

                      <Link href={`/movie-detail/${movie.id}`}>
                        <div className="flex flex-row w-60 h-5 justify-end gap-2 ">
                          <button className="cursor-pointer">See more</button>
                          <div className="h-6 w-10 flex items-center">
                            <Sideicon />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-130 h-0.2 border-1 border-[#E4E4E7] mt-5"></div>
            </div>
          );
        })}
        <div className="h-10 w-50">
          <button onClick={HandleResultClick} className="cursor-pointer">
            See all result for &quot;{values}&quot;
          </button>
        </div>
      </div>
    </>
  );
};
