import { socialEventsCoordinator } from "@/constant";
import React from "react";

import { blFour, blOne, blTwo, blThree,blFive, blSix,blSeven,blEight,blNine, blTen,blEleven } from "@/public";
import Image from "next/image";

const BLOSSOMS = () => {
  return (
    <>
      <div className="w-full min-h-screen text-center">
        <div className="mt-4 leading-tight">
          <span className="text-[14px] sm:text-[16px] font-semibold">
            SKIT welcomes you to
          </span>
        </div>
        <div>
          <span className="text-[32px] sm:text-[48px] font-black">
            BLOSSOMS
          </span>
        </div>
        <div className="mt-5 px-[20px] sm:px-[10%] lg:px-[15%]">
          <span className="text-[14px] sm:text-[16px] font-semibold">
            Blossoms 🌸 It is an event for kids of faculty members where they
            showcase their talent and join us for a blooming session
          </span>
        </div>

        <div className=" flex justify-center my-8">
          <div className="bg-white  p-5 rounded-[20px]  font-medium">
            <div>
              <span>Date: 14th March, 2024</span>
            </div>
            <div className="mt-2">
              <span>Time: 09:00 AM - 12:00 Noon at OAT, CS Block</span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-wrap gap-x-[50px] gap-y-4 mt-5 px-[20px] sm:px-[10%] lg:px-[15%] justify-center items-center">
            <Image
              src={blOne}
              alt="blOne"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blTwo}
              alt="blTwo"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blThree}
              alt="blThree"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blFour}
              alt="blFour"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blFive}
              alt="blFive"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blSix}
              alt="blSix"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blSeven}
              alt="blSeven"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blEight}
              alt="blEight"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blNine}
              alt="blNine"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blTen}
              alt="blTen"
              className="w-[300px] rounded-md"
            />
            <Image
              src={blEleven}
              alt="blEleven"
              className="w-[300px] rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap  justify-center w-full text-center mt-[40px] gap-y-[30px]">
          {socialEventsCoordinator.map((coordinatorDetail, index) => (
            <div key={index}>
              {coordinatorDetail.eventName === "Blossoms" && (
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

export default BLOSSOMS;
