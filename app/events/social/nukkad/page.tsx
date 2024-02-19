import { socialEventsCoordinator } from "@/constant";
import React from "react";

import {
  nukkadOne,
  nukkadTwo,
  nukkadThree,
  nukkadFour,
  nukkadFive,
  nukkadSix,
  nukkadSeven,
  nukkadEight,
} from "@/public";
import Image from "next/image";

const NUKKAD = () => {
  return (
    <>
      <div className="w-full min-h-screen text-center">
        <div className="mt-4 leading-tight">
          <span className="text-[14px] sm:text-[16px] font-semibold">
            SKIT welcomes you to
          </span>
        </div>
        <div>
          <span className="text-[32px] sm:text-[48px] font-black">NUKKAD NATAK</span>
        </div>
        <div className="mt-5 px-[20px] sm:px-[10%] lg:px-[15%]">
          <span className="text-[14px] sm:text-[16px] font-semibold">
            {'"'}Nukkad Naatak{'"'} is basically street plays in India, where
            folks act out short dramas on street corners. You{"'"}ve got {"'"}
            Nukkad{"'"} for street and {"'"}Naatak{"'"} for drama. Nukkad Natak
            is this cool way to use street performances to talk about things
            that matter, bringing a slice of social awareness to the streets.
          </span>
        </div>

        <div className=" flex justify-center my-8">
          <div className="bg-white  p-5 rounded-[20px]  font-medium">
            <div>
              <span>Date: 13th March, 2024</span>
            </div>
            <div className="mt-2">
              <span>Time: 11:00 AM - 01:00 PM at Front Side, Civil Block</span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-wrap gap-x-[50px] gap-y-4 mt-5 px-[20px] sm:px-[10%] lg:px-[15%] justify-center items-center">
            <Image
              src={nukkadOne}
              alt="nukkadOne"
              className="w-[300px] rounded-md"
            />
            <Image
              src={nukkadTwo}
              alt="nukkadTwo"
              className="w-[300px] rounded-md"
            />
            <Image
              src={nukkadThree}
              alt="nukkadThree"
              className="w-[300px] rounded-md"
            />
            <Image
              src={nukkadFour}
              alt="nukkadFour"
              className="w-[300px] rounded-md"
            />
            <Image
              src={nukkadFive}
              alt="nukkadFive"
              className="w-[300px] rounded-md"
            />
            <Image
              src={nukkadSix}
              alt="nukkadSix"
              className="w-[300px] rounded-md"
            />
            <Image
              src={nukkadSeven}
              alt="nukkadSeven"
              className="w-[300px] rounded-md"
            />
            <Image
              src={nukkadEight}
              alt="nukkadEight"
              className="w-[300px] rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap  justify-center w-full text-center mt-[40px] gap-y-[30px]">
          {socialEventsCoordinator.map((coordinatorDetail, index) => (
            <div key={index}>
              {coordinatorDetail.eventName === "Nukkad Naatak" && (
                <>
                  <div>
                    <span className="text-[16px] sm:text-[18px] font-bold">
                      Faculty Coordinator
                    </span>
                  </div>
                  <div className="flex mt-3 flex-wrap justify-center gap-[20px]">
                    {coordinatorDetail.facultyCoorinators.map(
                      (faculty, index) => (
                        <div
                          key={index}
                          className="p-[15px] border border-black rounded-[15px] w-[300px] bg-white"
                        >
                          <div>
                            <span className="font-bold">
                              {faculty.coordinatorName}
                            </span>
                          </div>
                          <div className="leading-tight">
                            <span className="text-[15px] ">
                              {faculty.coordinatorContact}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-5">
                    <span className="text-[16px] sm:text-[18px] font-bold">
                      Student Coordinator
                    </span>
                  </div>
                  <div className="flex mt-3 flex-wrap justify-center gap-[20px]">
                    {coordinatorDetail.studentCoorinators.map(
                      (faculty, index) => (
                        <div
                          key={index}
                          className="p-[15px] border border-black rounded-[15px] w-[300px] bg-white"
                        >
                          <div>
                            <span className="font-bold">
                              {faculty.coordinatorName}
                            </span>
                          </div>
                          <div className="leading-tight">
                            <span className="text-[15px] ">
                              {faculty.coordinatorContact}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NUKKAD;
