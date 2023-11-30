import React from "react";
import Image from "next/image";
import Link from "next/link";
import { basketball, dj, masterchef, rawaz, sur, thirak } from "@/public";
import { majorEventCards } from "@/constant";

const THIRAK = () => {
  const images = [
    dj,
    sur,
    rawaz,
    basketball,
    thirak,
    masterchef,
    dj,
    sur,
    rawaz,
    basketball,
    thirak,
    masterchef,
  ];

  return (
    <>
      <div className="w-full min-h-screen flex justify-center ">
        <div className="w-full ">
          <div className="w-full flex justify-center px-[10px] sm:px-[20px] ">
            <div className="w-full h-[300px] flex justify-center items-center bg-black rounded-[30px] ">
              <Image
                src={thirak}
                alt="thirak"
                className="w-full h-full object-cover   rounded-[30px] opacity-70"
              />
              <div className="absolute text-center">
                <div>
                  <span className="text-white text-[12px] sm:text-[13px] font-semibold">
                    PRAVAH
                  </span>
                </div>
                <div className="leading-tight ">
                  <span className="text-[24px] sm:text-[32px] text-white font-black">
                    THIRAK
                  </span>
                </div>
                <div className="flex justify-center items-center gap-[10px] ">
                  <div className="w-[50px] sm:w-[150px] h-[1px] bg-white rounded-full" />
                  <div>
                    <span className="text-white text-[13px] sm:text-[16px] font-bold uppercase">
                      Dance Competition
                    </span>
                  </div>
                  <div className="w-[50px] sm:w-[150px]  h-[1px] bg-white rounded-full" />
                </div>
                <div className="flex justify-center items-center gap-[20px] mt-[15px] ">
                  <div>
                    <button
                      className="bg-white  text-black text-[13px] sm:text-[14px] rounded-full font-bold 
                    px-[10px] sm:px-[15px] py-[6px] sm:py-[8px] "
                    >
                      Explore More
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
                </div>
              </div>
            </div>
          </div>
          <div className=" p-[10px] sm:p-[20px] columns-2  sm:columns-3  lg:columns-4 space-y-[10px] sm:space-y-[20px]  ">
            {majorEventCards.map((eventCardDetail, index) => (
              <div
                key={index}
                className="break-inside-avoid  flex-wrap  bg-pink-300 rounded-[15px] lg:rounded-[20px]  h-fit"
              >
                {eventCardDetail.cardType === "image" ? (
                  <div key={index} className=" rounded-[15px] lg:rounded-[20px] h-fit ">
                    <Image
                      src={eventCardDetail.cardItemLink}
                      alt="images"
                      width={500}
                      height={500}
                      loading="lazy"
                      className="object-cover rounded-[15px] lg:rounded-[20px] "
                    />
                  </div>
                ) : (
                  <div key={index} className=" h-fit rounded-[15px] lg:rounded-[20px]">
                    <video
                      playsInline
                      autoPlay
                      muted
                      className=" object-cover rounded-[15px] lg:rounded-[20px]"
                    >
                      <source
                        src={eventCardDetail.cardItemLink.toString()}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default THIRAK;
