"use client";

import { motion } from "framer-motion";

const TRANSITION_WRAPPER = (ParentComponent: any) => {
  return (
    <>
      <ParentComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default TRANSITION_WRAPPER;
