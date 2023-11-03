"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// import styles from '../styles';
import { staggerContainer } from "../utils/motion";

import MajorEventCard from "./eventCard";
import { majorEvents } from "@/constant";

const MAJOREVENTS = () => {
  const [active, setActive] = useState("eventTwo");

  return (
    <section>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col`}
      >
        <div className="nt-0 md:mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {majorEvents.map((world, index) => (
            <MajorEventCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MAJOREVENTS;
