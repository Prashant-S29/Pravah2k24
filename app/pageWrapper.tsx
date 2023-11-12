"use client";
import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";

const PAGEWRAPPER = ({ children }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const handelVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <div className={videoEnded?"hidden":"w-full h-screen z-50 flex justify-center items-center bg-black"}>
          <video
            onEnded={handelVideoEnded}
            playsInline
            autoPlay
            muted
            className=" object-contain md:w-full h-screen md:object-cover "
          >
            <source
              src="https://res.cloudinary.com/denl2iizs/video/upload/v1699377195/hej1ahafrtgnn400akiy.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {videoEnded && children}
      </AnimatePresence>
    </>
  );
};

export default PAGEWRAPPER;
