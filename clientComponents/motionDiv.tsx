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
import IMAGEGALLERY from "./imageGallery";

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
          className="w-[300px] md:w-[350px] lg:w-[450px] xl:[550px]  drop-shadow-xl  "
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
      <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
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
      <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT3 = () => {
  const placeholderText = [{ type: "heading1", text: "Pravah'23 Highlights" }];

  return (
    <>
      <motion.div initial="hidden" whileInView="visible">
        <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
          {placeholderText.map((item, index) => (
            <AnimatedCharacters {...item} key={index} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const ANIMATEDTEXT6 = () => {
  const placeholderText = [{ type: "heading1", text: "Pravah'23" }];

  return (
    <>
      <motion.div initial="hidden" whileInView="visible">
        <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
          {placeholderText.map((item, index) => (
            <AnimatedCharacters {...item} key={index} />
          ))}
        </div>
      </motion.div>
    </>
  );
};
const ANIMATEDTEXT7 = () => {
  const placeholderText = [{ type: "heading1", text: "Highlights" }];

  return (
    <>
      <motion.div initial="hidden" whileInView="visible">
        <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
          {placeholderText.map((item, index) => (
            <AnimatedCharacters {...item} key={index} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const ANIMATEDTEXT4 = () => {
  const placeholderText = [{ type: "heading1", text: "Prior Celebrities" }];

  return (
    <motion.div initial="hidden" whileInView="visible">
      <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT5 = () => {
  const placeholderText = [{ type: "heading1", text: "Major Events" }];

  return (
    <motion.div initial="hidden" whileInView="visible">
      <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
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
      <div className="flex justify-center px-[20px]">
        <div className="w-full md:w-[550px] h-[200px] md:h-[300px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DyuUx1obJ_M?si=UnMiaFsxONMeLVp0"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-[20px]"
            data-cursor-text="Play"
            data-cursor-size="80px"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

const GALLERY = () => {
  return (
    <motion.div
      variants={fadeUp("tween", 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <IMAGEGALLERY />
    </motion.div>
  );
};

const STATS = () => {
  return (
    <motion.div
      variants={fadeUp("tween", 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="flex flex-wrap text-center justify-center gap-3 md:gap-5 items-center mt-[20px]">
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[18px] md:text-[22px] lg:text-[28px]">100+</span>
          </div>
          <div>
            <span className="text-[14px] md:text-[16px]">Events</span>
          </div>
        </div>
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[18px] md:text-[22px] lg:text-[28px]">4000+</span>
          </div>
          <div>
            <span className="text-[14px] md:text-[16px]">Registration</span>
          </div>
        </div>
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[18px] md:text-[22px] lg:text-[28px]">
              10000+
            </span>
          </div>
          <div>
            <span className="text-[14px] md:text-[16px]">Footfall</span>
          </div>
        </div>
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[22px] lg:text-[28px]">300+</span>
          </div>
          <div>
            <span className="text-[14px] md:text-[16px]">Winners</span>
          </div>
        </div>
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[22px] lg:text-[28px]">20+</span>
          </div>
          <div>
            <span className="text-[14px] md:text-[16px]">Sponsors </span>
          </div>
        </div>
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
  ANIMATEDTEXT3,
  GALLERY,
  ANIMATEDTEXT4,
  STATS,
  ANIMATEDTEXT5,
  ANIMATEDTEXT6,
  ANIMATEDTEXT7,
};
