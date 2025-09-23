import { Poster } from "../_componants/poster";

export const MovieList = (props) => {
  const { heading } = props;
  return (
    <div className="w-full h-210 mt-10 justify-center ">
      <div className="w-full h-9 flex-row flex justify-between  ">
        <p className="font-semibold">{heading}</p>
        <button className="cursor-pointer">See more</button>
      </div>

      <div className="w-full h-200 flex-wrap justify-around flex gap-5 ">
        <Poster image="./images/santa.jpg" rate={"4"} title="Dear Santa" />
        <Poster
          image="./images/dragon.jpg"
          rate={"4"}
          title="How To Train Your Dragon Live Action"
        />
        <Poster image="./images/alien.jpg" rate={"4"} title="Alien Romulus" />
        <Poster image="./images/ashes.jpg" rate={"4"} title="From the Ashes" />
        <Poster image="./images/space.jpg" rate={"4"} title="Space Dog" />
        <Poster image="./images/order.jpg" rate={"4"} title="The Order" />
        <Poster image="./images/y2k.jpg" rate={"4"} title="Y2K" />
        <Poster
          image="./images/solo.jpg"
          rate={"4"}
          title="Solo Leveling: ReAwakening"
        />
        <Poster image="./images/get-away.jpg" rate={8} title="Get Away" />
        <Poster
          image="./images/sonic.jpg"
          rate={"4"}
          title="Sonic the Hedgehog 3"
        />
      </div>
    </div>
  );
};
