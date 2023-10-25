"use client";

import { testImage } from "@/assets";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ANIMATEDTEXT2, TYPINGTEXT } from "./motionDiv";

const IMAGEGALLERY = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="z-50">
        <TYPINGTEXT title="| Pravah'23 Highlights" />
      </div>
      <div>
        <ANIMATEDTEXT2 />
      </div>
      <div className="sticky top-0 flex py-[100px] items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="group relative w-full h-auto md:h-[350px] md:w-[350px] overflow-hidden rounded-[20px]  ">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform "
      ></div>
    </div>
  );
};

export default IMAGEGALLERY;

type CardType = {
  url: string;
  title: string;
};

const cards: CardType[] = [
  {
    url: testImage.src,
    title: "Title 1",
  },
  {
    url: testImage.src,
    title: "Title 2",
  },
  {
    url: testImage.src,
    title: "Title 3",
  },
  {
    url: testImage.src,
    title: "Title 4",
  },
  {
    url: testImage.src,
    title: "Title 5",
  },
  {
    url: testImage.src,
    title: "Title 6",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
  {
    url: testImage.src,
    title: "Title 7",
  },
];
