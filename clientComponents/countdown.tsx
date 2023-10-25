"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
// FORMAT: MM/DD/YYYY
const COUNTDOWN_FROM = "02/01/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const TIMERCOUNT = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="">
      <div className="w-full max-w-xl mx-auto flex items-center ">
        <CountdownItem num={remaining.days} text="days" />
        <span className="text-[40px] font-black leading-none">:</span>
        <CountdownItem num={remaining.hours} text="hours" />
        <span className="text-[40px] font-black leading-none">:</span>
        <CountdownItem num={remaining.minutes} text="minutes" />
        <span className="text-[40px] font-black leading-none">:</span>
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
      <div>
        <span className="font-bold text-[18px]" >TO GO</span>
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className=" w-1/4  flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-[64px] font-black  leading-none"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default TIMERCOUNT;
