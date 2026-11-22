import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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

  const images = [
    "https://swiperjs.com/demos/images/abstract-1.jpg",
    "https://swiperjs.com/demos/images/abstract-2.jpg",
    "https://swiperjs.com/demos/images/abstract-3.jpg",
    "https://swiperjs.com/demos/images/abstract-4.jpg",
    "https://swiperjs.com/demos/images/abstract-5.jpg",
  ];

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
              <img src={line_decorate} alt="" className="w-[15%]" />
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

        <div className=" min-h-[70vh] sm:min-h-[80vh]  w-full flex justify-between mt-30 relative">
          <div className=" absolute -left-25 sm:-left-10 w-[w-50%] h-full">
            <img src={tree} alt="" className=" object-cover w-full h-full " />
          </div>

          <div className="w-full"></div>

          <div className=" absolute -right-25 sm:-right-10  w-[w-50%] h-full">
            <img
              src={tree}
              alt=""
              className="-scale-x-100 object-cover w-full h-full "
            />
          </div>
        </div>

        <div className="gallery-container ">
          <h2 className="text-3xl font-semibold text-green-900 pb-12 text-center">PHOTO GALLERY</h2>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} >
                <img
                  src={img}
                  alt={`Memory ${i + 1}`}
                  className="gallery-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Index;
