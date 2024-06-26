import Link from "next/link";
import React from "react";

import Marquee from "react-fast-marquee";

const LATESTNEWS = () => {
  return (
    <>
      <div className="z-40 sticky top-0 w-full py-[5px] bg-yellow-300 font-semibold">
        <div className="hidden md:block">
          <Marquee autoFill={true}>
            <Link href="/events">
              <div className="px-[30px] text-[14px] sm:text-[16px]">
                <span>
                  Pravah 2024 is about to hit. Have you registed in any event?{" "}
                  <span className="underline font-bold">Click here</span> for
                  event registration.
                </span>
              </div>
            </Link>
          </Marquee>
        </div>
        <div className="block md:hidden">
          <Marquee autoFill={true} speed={40}>
            <Link href="/events">
              <div className="px-[30px] text-[14px] sm:text-[16px]">
                <span>
                  Pravah 2024 is about to hit. Have you registed in any event?{" "}
                  <span className="underline font-bold">Click here</span> for
                  event registration.
                </span>
              </div>
            </Link>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default LATESTNEWS;
