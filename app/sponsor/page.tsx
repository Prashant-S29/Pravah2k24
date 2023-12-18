"use client";

import React from "react";
import Link from "next/link";

import TRANSITION_WRAPPER from "../../clientComponents/transition";
import PRIORSPONSORS from "@/clientComponents/priorSponsor";
import Image from "next/image";
import { download } from "@/public";

const SPONSOR_OBJECT = () => {
  return (
    <>
      <div className="mt-[50px]">
        <div className="text-center">
          <span className="text-[18px] sm:text-[24px] md:text-[32px] font-black">
            Prior Sponsors
          </span>
        </div>
        <div className="my-[30px]">
          <PRIORSPONSORS />
        </div>
      </div>
      <div className="w-full min-h-[350px] flex justify-center  ">
        <div className="text-center">
          <div className="leading-tight">
            <span className="font-black text-[38px] sm:text-[48px] md:text-[64px]">
              Pravah 2024 Sponsors
            </span>
          </div>
          <div>
            <span className="text-[18px] sm:text-[24px] md:text-[32px] font-black">
              Coming Soon
            </span>
          </div>
          <div className="px-[20px] mt-[20px]">
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
            <Link href="https://res.cloudinary.com/denl2iizs/image/upload/v1702559789/djvgjufpbdgghhmtxdih.pdf" target="_blank">
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
    </>
  );
};

const SPONSOR = () => {
  return TRANSITION_WRAPPER(SPONSOR_OBJECT);
};

export default SPONSOR;
