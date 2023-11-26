"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix } from "@/public";

const INTROPAGE_CARD = () => {
  const cardImages = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
      }

      if (currentIndex === 4) {
        setPause(true);

        setTimeout(() => {
          setPause(false);
        }, 2000); // Pause timer for the main image. don't change it.
      }
    }, 700); // Repetation timer

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, pause, cardImages.length]);
  return (
    <>
      <div className="mt-[20px] h-[150px] md:h-[250px] flex justify-center items-center ">
        {cardImages.map((image, index) => (
          <div
            key={index}
            className="absolute w-[350px] rouned-[20px]   "
            // onClick={showImage}
          >
            <Image
              src={image}
              alt={index.toString()}
              className={`w-[350px]  object-cover duration-200 object-top rounded-[20px] ${
                index === currentIndex ? "" : "opacity-0 -rotate-12  "
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default INTROPAGE_CARD;
