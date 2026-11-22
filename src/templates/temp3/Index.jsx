import React, { useEffect } from "react";

import backgroundTexture from "./imageThemes/background-texture.webp";
import flowergarland from "./imageThemes/flower-garland.webp";
import archframe from "./imageThemes/arch-frame.webp";
import icondecoration from "./imageThemes/icon-decoration.webp";
import kalash2 from "./imageThemes/kalash2-decoration.webp";
import leaf1 from "./imageThemes/leaf1-decoration.webp";
import kalash from "./imageThemes/kalash-decoration.webp";
import tree from "./imageThemes/tree-decoration.webp";
import line_decorate from "./imageThemes/line-decoration.webp";
import { useAutoScroll } from "../../utils/useAutoScroll";

const Index = () => {
  const { startScroll, toggleScroll, isPlaying } = useAutoScroll(25);

  useEffect(() => {
    startScroll();
  }, [startScroll]);
  return (
    <div
      onClick={toggleScroll}
      className="w-full min-h-screen bg-[#f5e9c9] cursor-pointer"
    >
      <div
        className="relative w-full max-w-4xl min-h-screen mx-auto overflow-hidden flex flex-col items-center"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Flower Garland */}
        <div className="absolute -top-2 sm:-top-4 md:-top-6 left-0 w-full z-10 pointer-events-none">
          <img
            src={flowergarland}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Arch Frame */}
        <div className="relative w-full mt-20 sm:mt-32 md:mt-55 flex justify-center z-20">
          <img
            src={archframe}
            alt=""
            className="w-[96%] h-auto object-contain"
          />

          {/* Icon Decoration */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28%] sm:w-[24%] md:w-[20%]">
            <img
              src={icondecoration}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side Decoration */}
          <div className="absolute bottom-[2%] right-0 w-[40%]   z-10 pointer-events-none">
            <div className="relative flex items-center justify-center">
              <img
                src={leaf1}
                alt=""
                className="absolute right-[-15%] bottom-[5%] w-[110%] h-auto -rotate-10"
              />

              <img
                src={kalash2}
                alt=""
                className="relative w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Left Side Decoration */}
          <div className="absolute bottom-[2%] left-0 w-[40%]   z-10 pointer-events-none">
            <div className="relative flex items-center justify-center">
              <img
                src={leaf1}
                alt=""
                className="absolute left-[-15%] bottom-[5%] w-[110%] h-auto scale-x-[-1] rotate-10"
              />

              <img
                src={kalash}
                alt=""
                className="relative w-full h-auto object-contain "
              />
            </div>
          </div>
        </div>

        {/* Contents */}

        <div className="my-10 w-full text-center">
          <h2 className="text-3xl tracking-wider font-semibold text-green-800 font-mono">
            CEREMONY INFO
          </h2>
          <div className="w-full flex justify-between items-center  mt-8">
            <div className="w-full "></div>
            <div className="w-full  flex items-center justify-center">
              <img src={line_decorate} alt="" className="w-[10%]" />
            </div>
            <div className="w-full "></div>
          </div>

          <div className="mt-8">
            <h2 className="text-center text-xl tracking-wider text-red-900 font-semibold">
              WE JOYFULLY ANNOUNCE
            </h2>
            <h2 className="text-center text-xl tracking-wider text-red-900 font-semibold">
              THE WEDDING OF OUR CHILDREN
            </h2>
          </div>
        </div>

        <div className=" min-h-screen  w-full flex justify-between mt-30 relative">
          <div className=" absolute -left-15 sm:w-[w-50%] sm:h-full h-[60%]">
            <img src={tree} alt="" className=" object-cover w-full h-full " />
          </div>

          <div className="w-full"></div>

          <div className=" absolute -right-15  w-[w-50%] sm:h-full h-[60%]">
            <img
              src={tree}
              alt=""
              className="-scale-x-100 object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
