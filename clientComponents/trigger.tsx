"use client";

import React, { useRef, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY } from "./motionDiv";
import IMAGEGALLERY from "./imageGallery";
import TAG_PARA from "./tagParagraph";

const TRIGGER = () => {
  const workText = useRef(null);
  const container = useRef(null);
  const galleryContainter = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "-=300px",
        end: "+=200px",
        // markers: true,
      },
    });
    timeline.fromTo(
      workText.current,
      { scale: "0.5", opacity: "0" },
      { scale: "1", opacity: "1" }
    );
    timeline.fromTo(
      container.current,
      { clipPath: `inset(15%)` },
      { clipPath: `inset(0%)` },
      "0"
    );
    timeline.fromTo(
      galleryContainter.current,
      { opacity: "0" },
      { opacity: "1" },
      "0"
    );
  }, []);

  return (
    <>
      <div ref={container} id="box" className="relative w-full bg-black">
        <div ref={workText} className="w-full text-center text-white ">
          <span className=" text-[50px] sm:text-[100px] md:text-[120px] lg:text-[150px] xl:text-[200px] font-black uppercase ">
            Glimpses
          </span>
        </div>
        <div ref={galleryContainter}>
          <IMAGEGALLERY />
        </div>
        <br />
        <div className="my-[20px] sm:my-[60px] lg:my-[100px]">
          <TAG_PARA />
        </div>
        <br />
      </div>
    </>
  );
};

export default TRIGGER;
