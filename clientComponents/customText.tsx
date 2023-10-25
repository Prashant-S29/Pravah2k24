"use client";

import React from "react";

import { motion } from "framer-motion";
import { fadeIn, textContainer, textVariant2 } from "../utils/motion";

export const TypingTextEffect = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[18px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter: any, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={fadeIn("up", "tween", 0.2, 0.75)}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
