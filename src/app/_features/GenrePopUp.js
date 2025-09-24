import { Genres } from "../_componants/genres";
export const GenrePopUp = () => {
  return (
    <div className="w-145  bg-white border-1 border-[#E4E4E7] rounded-lg max-h-fit">
      <div className="w-53 h-15 mt-10 ml-10">
        <p className="font-semibold text-2xl">Genres</p>
        <p className="text-base font-normal">See lists of movies by genre</p>
      </div>
      <div className="w-120 h-0.2 border-1 border-[#E4E4E7] ml-10"></div>
      <div className="w-120 ml-10 flex flex-wrap gap-2  mb-10 ">
        <Genres button={"Action"} />
        <Genres button={"Adventure"} />
        <Genres button={"Animation"} />
        <Genres button={"Biography"} />
        <Genres button={"Comedy"} />
        <Genres button={"Crime"} />
        <Genres button={"Documentary"} />
        <Genres button={"Drama"} />
        <Genres button={"Fantasy"} />
        <Genres button={"Film-Noir"} />
        <Genres button={"Game-Show"} />
        <Genres button={"History"} />
        <Genres button={"Horror"} />
        <Genres button={"Music"} />
        <Genres button={"Musical"} />
        <Genres button={"Mystery"} />
        <Genres button={"News"} />
        <Genres button={"Reality-TV"} />
        <Genres button={"Romance"} />
        <Genres button={"Sci-Fi"} />
        <Genres button={"Short"} />
        <Genres button={"Sport"} />
        <Genres button={"Talk-Show"} />
        <Genres button={"Thriller"} />

        <Genres button={"War"} />
        <Genres button={"Western"} />

        {/* <div className="w-19 h-5 justify-evenly flex  items-center border-1 border-black rounded-lg mt-5 cursor-pointer">
            <button className="font-semibold cursor-pointer">Action</button>
            <Sideicon />
          </div> */}
      </div>
    </div>
  );
};
