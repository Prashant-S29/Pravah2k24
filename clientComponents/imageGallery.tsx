"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

type ImageGalleryItemProps = {
  title: string;
  index: number;
  displayState: boolean;
  marqueeDirection: any;
  youtubeLink: string;
  setDisplayState?: (value: boolean) => void;
  resetDisplayState: () => void;
};

const getScreenSize = () => {
  // Logic to determine screen size based on window width
  const width = window.innerWidth;
  if (width >= 720) {
    return "lg";
  } else {
    return "md";
  }
};

const screenSize = getScreenSize();

const ImageGalleryItem = ({
  title,
  index,
  displayState,
  marqueeDirection,
  youtubeLink,
  resetDisplayState,
}: ImageGalleryItemProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={fadeIn("up", "tween", 0.2 * (index + 1), 0.25)}
    className="overflow-y-clip -mt-[55px] sm:-mt-[155px] border-b border-black"
  >
    <div className="h-[55px] sm:h-[155px] bg-transparent" />
    <div
      className="h-[55px] sm:h-[90px] duration-300 "
      style={
        displayState
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "transparent", color: "black" }
      }
      onClick={() => resetDisplayState()}
    >
      <Marquee autoFill={true} speed={50} direction={marqueeDirection}>
        <div className=" flex gap-3 text-[32px] sm:text-[48px] md:text-[62px] px-[20px] items-center">
          <div>
            <span>{title}</span>
          </div>
          <div className="text-[30px] pl-[20px]">
            <div
              className={`leading-none flex items-center  ${
                marqueeDirection === "right"
                  ? "animate-spin-one"
                  : "animate-spin-two"
              }`}
            >
              <span>&#9733;</span>
            </div>
          </div>
        </div>
      </Marquee>
      <div className="flex justify-center ">
        <div
          className={`w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-[20px] z-10 bg-slate-600 duration-300  shadow-2xl shadow-black ${
            displayState == true ? `-mt-[80px] sm:-mt-[120px] md:-mt-[200px] ` : "mt-[50px] rotate-12"
          } ${
            displayState == true && marqueeDirection == "right"
              ? "-rotate-12"
              : "rotate-12"
          } `}
        >
          {/* <iframe
            width="100%"
            height="100%"
            src={youtubeLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-[20px]"
          ></iframe> */}  
        </div>
      </div>
    </div>
  </motion.div>
);

const IMAGEGALLERY = () => {
  const [galleryItems, setGalleryItems] = useState([
    {
      title: "Pravah 23 After Story",
      displayState: false,
      marqueeDirection: "left",
      youtubeLink:
        "https://www.youtube.com/embed/nzBm77PZ_BI?si=0XNw8q2sUexKj6Hs",
    },
    {
      title: "Aaveg",
      displayState: false,
      marqueeDirection: "right",
      youtubeLink:
        "https://www.youtube.com/embed/V-094flkqjI?si=_K4SvOox1AP4bTYh",
    },
    {
      title: "Crowd Work",
      displayState: false,
      marqueeDirection: "left",
      youtubeLink:
        "https://www.youtube.com/embed/V-094flkqjI?si=_K4SvOox1AP4bTYh",
    },
    {
      title: "Developers",
      displayState: true,
      marqueeDirection: "right",
      youtubeLink:
        "https://www.youtube.com/embed/V-094flkqjI?si=_K4SvOox1AP4bTYh",
    },
    {
      title: "Behind the sense",
      displayState: false,
      marqueeDirection: "left",
      youtubeLink:
        "https://www.youtube.com/embed/V-094flkqjI?si=_K4SvOox1AP4bTYh",
    },
  ]);

  const resetDisplayState = (index: number) => {
    const updatedGalleryItems = galleryItems.map((item, i) => ({
      ...item,
      displayState: i === index,
    }));
    setGalleryItems(updatedGalleryItems);
  };

  return (
    <>
      <div data-cursor-text="click" data-cursor-size="70px">
        {galleryItems.map((item, index) => (
          <ImageGalleryItem
            key={index}
            index={index}
            {...item}
            resetDisplayState={() => resetDisplayState(index)}
          />
        ))}
      </div>
    </>
  );
};

export default IMAGEGALLERY;
