import Image from "next/image";
import Link from "next/link";
import React from "react";

const PATANBAAZ = () => {
  return (
    <>
      <div className="w-full min-h-screen block sm:flex justify-center gap-[50px] lg:gap-[100px] px-[20px]">
        <div className="flex justify-center">
          <div className="px-[20px] ">
            <Image
              src="https://res.cloudinary.com/denl2iizs/image/upload/v1704795786/tbjrrostzhusxir6zzyq.jpg"
              alt="patanbazzEvent"
              width={350}
              height={500}
              className="object-cover  w-[250px] sm:w-[300px] lg:w-[350px] rounded-[20px] shadow-xl"
            />
          </div>
        </div>
        <div className="mt-[10px] text-center">
          <div className="leading-none">
            <span className="font-black  text-[32px] sm:text-[38px] md:text-[52px] lg:text-[64px]">
              Patangbaaz
            </span>
          </div>
          <div>
            <span className="font-medium text-[13px] sm:text-[17px]">
              Kite Flying Competition
            </span>
          </div>
          <div className="mt-[20px] font-semibold  text-[16px] sm:text-[18px]">
            <span>Date: January 12, 2023</span>
          </div>
          <div className=" font-semibold  text-[16px] sm:text-[18px]">
            <span>Time: 01:30 PM Onwards</span>
          </div>
          <div className=" font-semibold  text-[16px] sm:text-[18px]">
            <span>Venue: Football Ground, SKIT</span>
          </div>
          <div className=" font-semibold  text-[16px] sm:text-[18px]">
            <span>Registration Fee: ₹60/- per team</span>
          </div>
          <div className="mt-[10px]">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxL9Asa4FDvThe-DwINPi56RnNFRmr2_mjLRbzgBVWn5Ft_Q/viewform"
              target="_blank"
            >
              <button className="px-[15px] py-[8px] bg-black text-white text-[14px] font-semibold rounded-[10px]">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PATANBAAZ;
