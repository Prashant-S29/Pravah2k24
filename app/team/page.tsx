"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import TRANSITION_WRAPPER from "@/clientComponents/transition";
import { centralWorkingCommittee, coreTeam } from "@/constant";
import {
  ANIMATEDTEXT13,
  ANIMATEDTEXT14,
  ANIMATEDTEXT15,
  ANIMATEDTEXT16,
  TYPINGTEXT,
} from "@/clientComponents/motionDiv";
import { contact_icon, instagram, linkedin } from "@/public";

const TEAM_PRAVAH_CARD = ({ memberDetail, index }) => {
  return (
    <>
      <div
        key={index}
        className=" w-full sm:w-[400px] border bg-white border-black  rounded-[20px] p-[20px]"
      >
        <div className="flex justify-center">
          <Image
            src={memberDetail.memberPhoto}
            alt={memberDetail.memberName}
            className="w-[110px] sm:w-[150px] aspect-square rounded-full -mt-[75px] sm:-mt-[95px] "
          />
        </div>
        <div className="mt-[10px]">
          <span className="text-[20px] sm:text-[24px] font-black  ">
            {memberDetail.memberName}
          </span>
        </div>
        <div>
          <span className="text-[14px] sm:text-[16px]">
            {memberDetail.memberPost}
          </span>
        </div>
        <div>
          <span className="text-[14px] sm:text-[16px]">
            {memberDetail.memberDepartment}
          </span>
        </div>
        <div className="w-full flex justify-center gap-[30px] mt-[10px]  -mb-[38px]">
          <div className="p-[8px] rounded-full w-fit flex justify-center bg-black ">
            <Image
              src={contact_icon}
              alt="contact_icon"
              className="w-[20px] aspect-square"
            />
          </div>
          <div className="p-[7px] rounded-full w-fit flex justify-center bg-black ">
            <Image
              src={linkedin}
              alt="linkedin"
              className="w-[21px] aspect-square"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const TEAM_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-[80vh] flex  justify-center   items-center  ">
        <div className="text-[32px] md:text-[48px] lg:text-[64px] font-black leading-tight">
          <span>COMING SOON</span>
        </div>
        <div className="text-center hidden">
          <div className="mt-[50px]">
            <div>
              <TYPINGTEXT title="Faculty Team" />
              <div className="hidden sm:block">
                <ANIMATEDTEXT13 />
              </div>
              <div className="block sm:hidden">
                <ANIMATEDTEXT14 />
                <ANIMATEDTEXT15 />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-[50px] gap-y-[90px] sm:gap-y-[120px] mt-[80px] mx-[20px]">
            {centralWorkingCommittee.map((memberDetail, index) => (
              <TEAM_PRAVAH_CARD
                key={index}
                memberDetail={memberDetail}
                index={index}
              />
            ))}
          </div>
          <div className="mt-[50px]">
            <div>
              <TYPINGTEXT title="Student Team" />
              <ANIMATEDTEXT16 />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-[50px] gap-y-[90px] sm:gap-y-[120px] mt-[80px] mx-[20px] mb-[50px]">
            {coreTeam.map((memberDetail, index) => (
              <TEAM_PRAVAH_CARD
                key={index}
                memberDetail={memberDetail}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TEAM = () => {
  return TRANSITION_WRAPPER(TEAM_OBJECT);
};

export default TEAM;
