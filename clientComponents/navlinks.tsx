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
}: any) => {
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
                <span className="font-bold text-[16px]">{navlink}</span>
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
            className="leading-tight w-[160px] "
            style={{ color: linkInfoColor }}
          >
            <span>{linkinfo}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NAVLINK;
