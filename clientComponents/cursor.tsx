"use client";

import React, { useEffect, useState } from "react";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

import AnimatedCursor from "react-animated-cursor";

import { motion } from "framer-motion";

const CURSOR = () => {
  return (
    <>
      <div>
        <Cursor
          isGelly={true}
          gellyAnimationAmount={80}
          cursorSize={20}
          sizeAnimationDuration={1}
          textAnimationDuration={1}
        />{" "}
      </div>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      /> */}
    </>
  );
};

export default CURSOR;
