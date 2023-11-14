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
        <div className="flex lg:flex-row flex-col h-[70vh] lg:h-fit gap-5 ">
          {majorEvents.map((eventDetail, index) => (
            <MajorEventCard
              key={eventDetail.id}
              {...eventDetail}
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
