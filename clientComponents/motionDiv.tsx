"use client";

import React from "react";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";

import AnimatedCharacters from "@/clientComponents/animateText";

import EVENTMARQUEE from "./eventMarquee";
import COUNTDOWN from "./countdown";
import { TypingTextEffect } from "./customText";
import IMAGEGALLERY from "./imageGallery";
import TITLETEXTANIMATION from "./titleTextAnimation";

// https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/ywfiarxgl0tstjuouphd.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/dgfqsesshawe5omnvfmc.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/dthdv0msarutycuhjxib.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/g8hynmzbxo7enfnrnv8e.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/nxsbtdkb3fulim3el4r9.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/vqfvlklaujjcgvaiq109.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/ssthzscie5vb7oscyznw.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624759/pravah2k24/text/o6pchlfav9b6o6meyfcj.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624759/pravah2k24/text/xlbqchxl88s5celedf8g.png
// https://res.cloudinary.com/denl2iizs/image/upload/v1700624759/pravah2k24/text/yu3j0xxd3lc8wbmdghyk.png

const TITLEIMAGE = () => {
  return (
    <>
      <motion.div
        variants={fadeUp("tween", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        className=" w-full flex justify-center px-[20px]   "
      >
        <TITLETEXTANIMATION />
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
        viewport={{ once: true, amount: 0.1 }}
      >
        <EVENTMARQUEE />
      </motion.div>
    </>
  );
};

const ANIMATEDTEXT1 = () => {
  const placeholderText = [{ type: "heading1", text: "Theme Reveal." }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[32px] md:text-[38px] lg:text-[48px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT17 = () => {
  const placeholderText = [{ type: "heading1", text: "Logo Reveal." }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[32px] md:text-[38px] lg:text-[48px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT2 = () => {
  const placeholderText = [{ type: "heading1", text: "Glimpses" }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[32px]  md:text-[48px] lg:text-[64px] font-black leading-tight">
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT8 = () => {
  const placeholderText = [{ type: "heading1", text: "Prior Sponsors" }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[32px] md:text-[48px]  lg:text-[64px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT10 = () => {
  const placeholderText = [{ type: "heading1", text: "Pravah" }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[48px] md:text-[64px] lg:text-[72px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT13 = () => {
  const placeholderText = [
    { type: "heading1", text: "Central Working Committee" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};
const ANIMATEDTEXT14 = () => {
  const placeholderText = [{ type: "heading1", text: "Central Working " }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};
const ANIMATEDTEXT15 = () => {
  const placeholderText = [{ type: "heading1", text: " Committee" }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT16 = () => {
  const placeholderText = [{ type: "heading1", text: "Core Team" }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT11 = () => {
  const placeholderText = [{ type: "heading1", text: "SKIT, Jaipur" }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black leading-tight">
        {placeholderText.map((item, index) => (
          <AnimatedCharacters {...item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

const ANIMATEDTEXT12 = () => {
  const placeholderText = [{ type: "paragraph", text: "AAVEG'23" }];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black leading-none">
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
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
      viewport={{ once: true, amount: 0.1 }}
    >
      <TypingTextEffect title={title} textStyles="text-center" />
    </motion.div>
  );
};

const VIDEOBLOCK = () => {
  return (
    <motion.div>
      <div className="w-full lg:flex justify-center gap-[100px] px-[20px]">
        <div className=" flex justify-center">
          <div>
            <div>
              <ANIMATEDTEXT1 />
            </div>
            <div className="w-full flex justify-center md:w-[450px] h-[200px] md:h-[260px]">
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
        </div>
        <div className=" flex justify-center mt-[30px] lg:mt-0">
          <div>
            <div>
              <ANIMATEDTEXT17 />
            </div>
            <div className="w-full flex justify-center md:w-[450px] h-[200px] md:h-[260px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HVL4Fgel8S4?si=ZCr7rVp4-NkMXZ6P"
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
        </div>
      </div>
    </motion.div>
  );
};

const GALLERY = () => {
  return (
    <motion.div>
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
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-wrap text-center justify-center gap-3 md:gap-5 items-center mt-[20px]">
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[18px] md:text-[22px] lg:text-[28px]">
              100+
            </span>
          </div>
          <div>
            <span className="text-[14px] md:text-[16px]">Events</span>
          </div>
        </div>
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[18px] md:text-[22px] lg:text-[28px]">
              4000+
            </span>
          </div>
          <div>
            <span className="text-[14px] md:text-[16px]">Registration</span>
          </div>
        </div>
        <div className="p-[15px] md:p-[20px] w-[120px] md:w-[150px] bg-black text-white rounded-[20px]">
          <div>
            <span className="font-black text-[18px] md:text-[22px] lg:text-[28px]">
              6500+
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
  ANIMATEDTEXT8,
  ANIMATEDTEXT10,
  ANIMATEDTEXT11,
  ANIMATEDTEXT12,
  ANIMATEDTEXT13,
  ANIMATEDTEXT14,
  ANIMATEDTEXT15,
  ANIMATEDTEXT16,
};
