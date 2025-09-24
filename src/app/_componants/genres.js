import { Sideicon } from "../icons/Sideicon";

export const Genres = (props) => {
  const { button } = props;
  return (
    <div className="w-max-w-fit  h-5 justify-evenly flex  items-center border-1 border-black rounded-lg mt-5 cursor-pointer p-2 gap-2 ">
      <button className="font-semibold cursor-pointer">{button}</button>
      <Sideicon />
    </div>
  );
};
