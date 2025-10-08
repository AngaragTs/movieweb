import { Sideicon } from "../icons/Sideicon";
import { useRouter } from "next/navigation";
export const Genres = (props) => {
  const { button, genreId } = props;
  const router = useRouter();

  const HandleMovieClick = () => {
    router.push(`/genremovie/${genreId}`);
  };
  return (
    <div
      onClick={HandleMovieClick}
      className="w-max-w-fit  h-5 justify-evenly flex  items-center border-1 border-black rounded-lg mt-5 cursor-pointer p-2 gap-2 "
    >
      <button className="font-semibold cursor-pointer">{button}</button>
      <Sideicon />
    </div>
  );
};
