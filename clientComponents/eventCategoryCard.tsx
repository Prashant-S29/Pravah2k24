import {
  celebrityNight,
  dj,
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  pause,
  resume,
  crown,
} from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const EVENT_CATEGORY_CRAD = ({
  imageState,
  eventCategory,
}: {
  imageState: boolean;
  eventCategory: object;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pauseImage, setPauseImage] = useState(imageState);

  const imageList = [
    celebrityNight,
    dj,
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    // imgSix,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseImage) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [imageList.length, pauseImage]);

  return (
    <>
      <div
        className={`w-[280px] sm:w-[320px] h-fit block gap-5 ${
          eventCategory["eventCategoryID"] === "whatsNew"
            ? `bg-gradient-to-tr from-yellow-300 to-orange-300 border-yellow-500      
            `
            : "bg-white"
        } border border-black rounded-[20px]  p-[10px]`}
      >
        {eventCategory["eventCategoryID"] === "whatsNew" ? (
          <div>
            <Image
              src={crown}
              alt="crown"
              className="absolute z-20 w-[100px] -rotate-[30deg] -mt-[50px] -ml-[46px] "
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex relative justify-center overflow-hidden w-full sm:w-[300px]  h-[200px]">
          {imageList.map((image, index) => (
            <div
              key={index}
              className={`bg-pink-400   overflow-hidden duration-300    ${
                index === currentImageIndex
                  ? "mt-0 opacity-100"
                  : "-mt-[200px] opacity-0"
              }`}
            >
              <Image
                src={image}
                alt="lol"
                className="object-cover -ml-[130px] sm:-ml-[150px]  absolute object-top rounded-[17px] w-[280px] sm:w-[300px] h-[200px]"
              />
            </div>
          ))}
        </div>
        <div className="mt-[10px]  text-center  ">
          <div>
            <span className="text-[20px] font-extrabold">
              {eventCategory["eventCategoryName"]}
            </span>
          </div>
        </div>
        <div className="text-center duration-300 "></div>

        <div className="flex w-full justify-center items-center gap-[10px] mt-[5px] ">
          <div className="w-full">
            <Link href={`/events/${eventCategory["eventCategoryID"]}`}>
              <button className="w-full px-[20px] py-[8px] text-[12px]  sm:text-[14px] font-semibold text-white bg-black rounded-[8px]">
                Explore
              </button>
            </Link>
          </div>
          <div className="w-[50px]">
            <button
              className="w-full flex justify-center items-center p-[11px] text-[12px]  sm:text-[14px] font-semibold text-white bg-black
                 rounded-full"
              onClick={(e) => {
                setPauseImage(!pauseImage);
              }}
            >
              <Image
                src={pauseImage ? pause : resume}
                alt="lol"
                className="w-[20px] aspect-square  rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EVENT_CATEGORY_CRAD;
