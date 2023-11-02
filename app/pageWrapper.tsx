"use client";
import React from "react";

import { AnimatePresence } from "framer-motion";

const PAGEWRAPPER = ({ children }) => {
  return (
    <>
      <AnimatePresence  mode="wait">{children}</AnimatePresence>
    </>
  );
};

export default PAGEWRAPPER;
