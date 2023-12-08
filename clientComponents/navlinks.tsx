"use client";

import React, { useState } from "react";
import Link from "next/link";

const NAVLINK = ({
  href,
  navlink,
  linkinfo,
  linkColor,
  linkInfoColor,
  lineColor,
}: {
  href: string;
  navlink: string;
  linkinfo: string;
  linkColor: string;
  linkInfoColor: string;
  lineColor: string;
}) => {
  const [lineLength, setLineLength] = useState(false);

  return (
    <>
      <div
        onMouseEnter={(e) => setLineLength(!lineLength)}
        onMouseLeave={(e) => setLineLength(!lineLength)}
        className="cursor-pointer "
      >
        <Link href={`/${href}`}>
          <div className="flex" style={{ color: linkColor }}>
            <div>
              <div>
                <span className="font-bold text-[14px] sm:text-[16px] leading-tight md:leading-normal ">
                  {navlink}
                </span>
              </div>
              <div
                className={`h-[1.5px] rounded-full bg-[${lineColor}] duration-150`}
                style={
                  lineLength
                    ? { width: "100%", backgroundColor: lineColor }
                    : { width: "0px", backgroundColor: lineColor }
                }
              />
            </div>
          </div>
          <div
            className="leading-tight w-full md:w-[160px] "
            style={{ color: linkInfoColor }}
          >
            <span className="text-[12px] md:text-[14px]">{linkinfo}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NAVLINK;
