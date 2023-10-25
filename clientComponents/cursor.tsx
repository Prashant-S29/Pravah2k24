"use client";

import React from "react";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";

const CURSOR = () => {
  return (
    <>
      <Cursor
        isGelly={true}
        gellyAnimationAmount={80}
        cursorSize={20}
        sizeAnimationDuration={0.7}
        textAnimationDuration={0.7}
      />
    </>
  );
};

export default CURSOR;
