"use client";

import { Smallicon } from "./icons/smallicon";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";
import { MovieZ } from "./icons/MoiveZ";
import { DownIcon } from "./icons/DownIcon";
import { Starticon } from "./icons/Staricon";
import { Poster } from "./_componants/poster";

export default function Home() {
  return (
    <div className="w-[1440px] m-auto">
      <div className="w-full h-20 flex-row  flex justify-evenly items-center  ">
        <div className="h-5 w-25 flex items-center gap-2">
          <Smallicon />
          <MovieZ />
        </div>

        <div className="w-150 h-9 flex gap-2 ">
          <button className="w-24 h-9 border-1 border-[#E4E4E7] cursor-pointer rounded-xl items-center justify-evenly flex ">
            <DownIcon />
            <p className="w-10 h-6 font-[400]">Genre</p>
          </button>

          <div className="flex-row flex h-9 w-94 border-1 border-[#E4E4E7] rounded-xl p-1 items-center">
            <img className="w-4 h-4 " src="SearchIcon.png"></img>

            <input
              placeholder="Search..."
              className="h-9 w-60 gap-1 outline-0"
            ></input>
          </div>
        </div>

        <button className="cursor-pointer ">
          <img src="icon2.png"></img>
        </button>
      </div>

      <div className="w-full h-250 flex relative ">
        <img className="w-full h-250 flex -z-1 absolute" src="./head.jpg"></img>
        <div className="flex text-white-50 text-white flex-col justify-center items-start pl-40 gap-5">
          <div className="w-36">
            <p className="text-base">Now Playing:</p>
            <p className="text-4xl">Wicked</p>
            <p></p>
          </div>
          <div className="w-100 text-base">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </div>
          <button className="h-10 w-36 bg-emerald-100 cursor-pointer rounded-xl">
            <p className="text-black">Watch Trailer</p>
          </button>
        </div>
      </div>

      <div className="w-full h-210 mt-10 justify-center ">
        <div className="w-full h-9 flex-row flex justify-between  ">
          <p className="font-semibold">Upcoming</p>
          <button className="cursor-pointer">See more</button>
        </div>

        <div className="w-full h-200 flex-wrap justify-around flex gap-5 ">
          <Poster image="./santa.jpg" icon={<Starticon />} title="Dear Santa" />
          <Poster
            image="dragon.jpg"
            icon={<Starticon />}
            title="How To Train Your Dragon Live Action"
          />
          <Poster
            image="alien.jpg"
            icon={<Starticon />}
            title="Alien Romulus"
          />
          <Poster
            image="ashes.jpg"
            icon={<Starticon />}
            title="From the Ashes"
          />
          <Poster image="space.jpg" icon={<Starticon />} title="Space Dog" />
          <Poster image="order.jpg" icon={<Starticon />} title="The Order" />
          <Poster image="y2k.jpg" icon={<Starticon />} title="Y2K" />
          <Poster
            image="solo.jpg"
            icon={<Starticon />}
            title="Solo Leveling: ReAwakening"
          />
          <Poster image="get-away.jpg" icon={<Starticon />} title="Get Away" />
          <Poster
            image="sonic.png"
            icon={<Starticon />}
            title="Sonic the Hedgehog 3"
          />

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="./santa.jpg"></img>
            <div className="ml-5 flex gap-2 mt-3">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>Dear Santa</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="dragon.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>How To Train Your Dragon Live Action</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="alien.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>Alien Romulus</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="ashes.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>From the Ashes</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="space.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>Space Dogg</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="order.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>The Order</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="y2k.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>Y2K</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="solo.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>Solo Leveling: ReAwakening</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="get-away.jpg"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>Get Away</p>
            </div>
          </div> */}

          {/* <div className="w-58 h-90 bg-[#F4F4F5]">
            <img className="w-58 h-70" src="sonic.png"></img>
            <div className="ml-5 flex gap-2 mt-2">
              <Starticon />
              <p>
                6.9/<span className="text-xs">10</span>
              </p>
            </div>
            <div className="ml-5">
              <p>Sonic the Hedgehog 3</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="w-full h-210 mt-10 justify-center ">
        <div className="w-full h-9 flex-row flex justify-between  ">
          <p className="font-semibold">Popular</p>
          <button className="cursor-pointer">See more</button>
        </div>

        <div className="w-full h-200 flex-wrap justify-around flex gap-5 ">
          <Poster
            image="shawshank.jpg"
            icon={<Starticon />}
            title="The Shawshank Redemption"
          />
          <Poster
            image="godfather.jpg"
            icon={<Starticon />}
            title="The Godfather"
          />
          <Poster
            image="darkknight.jpg"
            icon={<Starticon />}
            title="The The Dark Knight"
          />
          <Poster
            image="12angrymen.jpg"
            icon={<Starticon />}
            title="12 Angry Men"
          />
          <Poster
            image="lordofrings.jpg"
            icon={<Starticon />}
            title="The Lord of the Rings: The  Return of the King"
          />
          <Poster
            image="interstellar.png"
            icon={<Starticon />}
            title="Internstellar"
          />
          <Poster image="seven.png" icon={<Starticon />} title="Se7en" />
          <Poster
            image="wonderfullife.png"
            icon={<Starticon />}
            title="It’s a Wonderful life
"
          />

          <Poster
            image="samurai.png"
            icon={<Starticon />}
            title="Seven samurai"
          />
          <Poster
            image="silince.png"
            icon={<Starticon />}
            title="The Silence of the Lambs"
          />
        </div>
      </div>

      <div className="w-full h-210 mt-10 justify-center ">
        <div className="w-full h-9 flex-row flex justify-between  ">
          <p className="font-semibold">Top Rated</p>
          <button className="cursor-pointer">See more</button>
        </div>

        <div className="w-full h-200 flex-wrap justify-around flex gap-5 ">
          <Poster
            image="pulpfiction.jpg"
            icon={<Starticon />}
            title="Pulp Fiction"
          />
          <Poster
            image="fellow.jpg"
            icon={<Starticon />}
            title="The Lord of the Rings: Fellowship of the Kings"
          />
          <Poster
            image="goodbad.png"
            icon={<Starticon />}
            title="The Good, the Bad and the Ugly"
          />
          <Poster
            image="forestgump.jpg"
            icon={<Starticon />}
            title="Forrest Gump"
          />
          <Poster
            image="fightclub.jpg"
            icon={<Starticon />}
            title="Fight Club"
          />
          <Poster
            image="savingryan.png"
            icon={<Starticon />}
            title="Saving Private Ryan"
          />
          <Poster
            image="cityofgod.png"
            icon={<Starticon />}
            title="City of God"
          />
          <Poster
            image="greenmile.png"
            icon={<Starticon />}
            title="The Green Mile"
          />
          <Poster
            image="lifeisbeautiful.png"
            icon={<Starticon />}
            title="Life is Beautiful"
          />
          <Poster
            image="terminator.png"
            icon={<Starticon />}
            title="Terminator 2: Judgement Day"
          />
        </div>
      </div>

      <div>
        <img src="footer.png"></img>
      </div>

      {/* <div className="w-full h-70 bg-blue-600 items-center flex">
        <div className="w-90% h-50">
          <div className="h-50 w-40 flex items-center gap-2 text-white">
            <Smallicon />
            <MovieZ />
          </div>
          © 2024 Movie Z. All Rights Reserved.
        </div>

        <div className="h-50 w-200">
          <p>Contact Information</p>
          <div></div>
        </div>
      </div> */}
    </div>
  );
}
