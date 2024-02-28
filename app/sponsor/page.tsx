"use client";

import React from "react";
import Link from "next/link";

import TRANSITION_WRAPPER from "../../clientComponents/transition";
import PRIORSPONSORS from "@/clientComponents/priorSponsor";
import Image from "next/image";
import {
  download,
  chumbakk,
  mother,
  academy,
  kalam,
  toprankers,
  property,
  salt,
} from "@/public";

const SPONSOR_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-[350px] mt-[50px] flex justify-center  ">
        <div className="text-center">
          <div className="leading-tight">
            <span className="font-black text-[38px] sm:text-[48px] md:text-[64px]">
              Pravah 2024 Sponsors
            </span>
          </div>

          <div className="text-center flex justify-evenly mt-[50px] ">
            <div>
              <div className="leading-none">
                <span className="font-extrabold text-[32px] sm:text-[38px] md:text-[40px]">
                  Food Partner
                </span>
              </div>
              <div className="flex justify-center -mt-3">
                <Image
                  src={chumbakk}
                  alt="chumbakk"
                  className="w-[300px] sm:w-[380px]"
                />
              </div>
            </div>
            <div>
              <div className="leading-none">
                <span className="font-extrabold text-[32px] sm:text-[38px] md:text-[40px]">
                  Education Partner
                </span>
              </div>
              <div className="flex justify-center items-center mt-[50px]">
                <Image
                  src={kalam}
                  alt="kalam"
                  className="w-[300px] sm:w-[400px]"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-[50px] ">
            <div className="leading-none">
              <span className="font-extrabold text-[32px] sm:text-[38px] md:text-[40px]">
                Sponsors
              </span>
            </div>

            <div className="flex justify-center items-center px-[20px] flex-wrap gap-[30px]">
              <div className=" sm:mt-0 mt-3">
                <Image
                  src={academy}
                  alt="academy"
                  className="w-[180px] sm:w-[300px]"
                />
              </div>

              <div>
                <Image
                  src={mother}
                  alt="mother"
                  className="w-[320px] sm:w-[300px]"
                />
              </div>
              <div>
                <Image
                  src={toprankers}
                  alt="toprankers"
                  className="sm:w-[400px]"
                />
              </div>
              <div>
                <Image
                  src={property}
                  alt="property"
                  className="w-[100px] sm:w-[200px]"
                />
              </div>
              <div>
                <Image
                  src={salt}
                  alt="salt"
                  className="w-[100px] sm:w-[200px]"
                />
              </div>
            </div>
          </div>

          <div className="px-[20px] mt-[30px]">
            <span className="font-medium">
              Want to be a valuable sponsor of Pravah{"'"}24?
              <br />
              <Link href={"/sponsor/sponsorForm"}>
                <span className="underline font-bold">Click Here</span>
              </Link>{" "}
              to fill the sponsorship form.
            </span>
          </div>
          <div className="mt-[20px] flex justify-center">
            <Link
              href="https://res.cloudinary.com/denl2iizs/image/upload/v1702559789/djvgjufpbdgghhmtxdih.pdf"
              target="_blank"
            >
              <button
                className="px-[15px] py-[8px] rounded-[10px] bg-black text-white text-[14px] font-semibold
             flex justify-center items-center gap-2"
              >
                Sponsorship Proposal
                <Image src={download} alt="donwload" className="w-[20px]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="text-center">
          <span className="text-[18px] sm:text-[24px] md:text-[32px] font-black">
            Prior Sponsors
          </span>
        </div>
        <div className="my-[30px]">
          <PRIORSPONSORS />
        </div>
      </div>
    </>
  );
};

const SPONSOR = () => {
  return TRANSITION_WRAPPER(SPONSOR_OBJECT);
};

export default SPONSOR;
