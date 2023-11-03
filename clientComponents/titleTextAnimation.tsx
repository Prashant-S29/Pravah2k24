"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
} from "@/assets";

const TITLETEXTANIMATION = () => {
  const textImages = [
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 10); 
      }

      if (currentIndex === 1) {
        setPause(true);

        setTimeout(() => {
          setPause(false);
        }, 800); // Pause timer for the main image. don't change it.
      }
    }, 200); // Repetation timer

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, pause]);

  return (
    <>
      <div className="mt-[20px] h-[150px] md:h-[250px] flex justify-center items-center ">
        {textImages.map((image, index) => (
          <div
            key={index}
            className="absolute "
            data-cursor-exclusion
            data-cursor-size="80px"
          >
            <Image
              src={image}
              alt={index.toString()}
              className="w-[300px]  md:w-[550px]"
              style={{ display: index === currentIndex ? "block" : "none" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TITLETEXTANIMATION;
