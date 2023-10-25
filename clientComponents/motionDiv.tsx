"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/utils/motion";

import AnimatedCharacters from "@/clientComponents/animateText";

import {
  box,
  wingOne,
  wingTwo,
  sponsorOne,
  textOne,
  textTwo,
} from "../assets/index";

import EVENTMARQUEE from "./eventMarquee";
import COUNTDOWN from "./countdown";
import { TypingTextEffect } from "./customText";

const TITLEIMAGE = () => {
  return (
    <>
      <motion.div
        variants={fadeUp("tween", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        className="mt-[30px] w-full flex justify-center"
      >
        <Image
          src={textTwo}
          alt="textTwo"
          className="w-[450px]  drop-shadow-xl  "
        />
      </motion.div>
    </>
  );
};

const TIMER = () => {
  return (
    <>
      <motion.div
        variants={fadeUp("tween", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full"
      >
        <COUNTDOWN />
      </motion.div>
    </>
  );
};

const MARQUEEMOTION = () => {
  return (
    <>
      <motion.div
        variants={fadeUp("tween", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full"
      >
        <EVENTMARQUEE />
      </motion.div>
    </>
  );
};

const ANIMATEDTEXT1 = () => {
  const placeholderText = [{ type: "heading1", text: "Theme Reveal." }];

  return (
    <motion.div initial="hidden" whileInView="visible">
      <div className="text-center text-[64px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT2 = () => {
  const placeholderText = [{ type: "heading1", text: "Glimpses." }];

  return (
    <motion.div initial="hidden" whileInView="visible">
      <div className="text-center text-[64px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const TYPINGTEXT = ({ title }: any) => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <TypingTextEffect title={title} textStyles="text-center" />
    </motion.div>
  );
};

const VIDEOBLOCK = () => {
  return (
    <motion.div
      variants={fadeUp("tween", 0.1, 0.55)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JjmKBeLAWSU?si=RqJbNeL8mGLVOyJG"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-[20px]"
          data-cursor-text="Play"
          data-cursor-size="80px"
        ></iframe>
      </div>
    </motion.div>
  );
};

export {
  TITLEIMAGE,
  MARQUEEMOTION,
  TIMER,
  ANIMATEDTEXT1,
  ANIMATEDTEXT2,
  TYPINGTEXT,
  VIDEOBLOCK,
};
