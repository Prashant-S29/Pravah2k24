"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ANIMATEDTEXT2,
  ANIMATEDTEXT4,
  ANIMATEDTEXT8,
  GALLERY,
} from "./motionDiv";
import PRIORSPONSORS from "./priorSponsor";
import CELEBRITYCARD from "./celebrityCard";

const TRIGGERTWO = () => {
  const container = useRef(null);
  const leftContainer = useRef(null);
  const rightContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "-=300px",
        end: "+=300px",
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      <div className="mt-[50px]">
        <ANIMATEDTEXT4 />
      </div>
      <div>
        <CELEBRITYCARD />
      </div>
    </>
  );
};

export default TRIGGERTWO;
