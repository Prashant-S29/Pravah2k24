"use client";

import React from "react";

import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";


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
    </>
  );
};

export default CURSOR;
