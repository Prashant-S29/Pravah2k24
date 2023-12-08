import React from "react";
import Image from "next/image";
import { rawaz } from "@/public";
import { rawazImages } from "@/constant";

const RAWAZ = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center ">
        <div className="w-full ">
          <div className="w-full flex justify-center px-[10px] sm:px-[20px] ">
            <div className="w-full h-[300px] flex justify-center items-center bg-black rounded-[30px] ">
              <Image
                src={rawaz}
                alt="rawaz"
                className="w-full h-full object-cover object-top   rounded-[30px] opacity-70"
              />
              <div className="absolute text-center">
                <div>
                  <span className="text-white text-[12px] sm:text-[13px] font-semibold">
                    PRAVAH
                  </span>
                </div>
                <div className="leading-tight ">
                  <span className="text-[24px] sm:text-[32px] text-white font-black">
                    RAWAZ
                  </span>
                </div>
                <div className="flex justify-center items-center gap-[10px] ">
                  <div className="w-[50px] sm:w-[150px] h-[1px] bg-white rounded-full" />
                  <div>
                    <span className="text-white text-[13px] sm:text-[16px] font-bold uppercase">
                      Fashion Show
                    </span>
                  </div>
                  <div className="w-[50px] sm:w-[150px]  h-[1px] bg-white rounded-full" />
                </div>
                {/* <div className="flex justify-center items-center gap-[20px] mt-[15px] ">
                  <div>
                    <button
                      className="bg-white  text-black text-[13px] sm:text-[14px] rounded-full font-bold 
                    px-[10px] sm:px-[15px] py-[6px] sm:py-[8px] "
                    >
                      Register
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-white text-black text-[13px] sm:text-[14px] rounded-full font-bold 
                      px-[10px] sm:px-[15px] py-[6px] sm:py-[8px]"
                    >
                      Browse All
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className=" p-[10px] sm:p-[20px] columns-2  sm:columns-3  lg:columns-4 space-y-[10px] sm:space-y-[20px]  ">
            {rawazImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid  flex-wrap  bg-pink-300 rounded-[15px] lg:rounded-[20px]  h-fit"
              >
                <div
                  key={index}
                  className=" rounded-[15px] lg:rounded-[20px] h-fit "
                >
                  <Image
                    src={image}
                    alt="images"
                    width={500}
                    height={500}
                    loading="lazy"
                    className="object-cover rounded-[15px] lg:rounded-[20px] "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RAWAZ;
