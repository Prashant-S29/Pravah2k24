import { socialEventsCoordinator } from "@/constant";
import React from "react";

import {
  bhagirathOne,
  bhagirathTwo,
  bhagirathThree,
  bhagirathFour,
  bhagirathFive,
  bhagirathSix,
  bhagirathSeven,
  bhagirathEight,
} from "@/public";
import Image from "next/image";

const KAVYANJALI = () => {
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
            KAVYANJALI
          </span>
        </div>
        <div className="mt-5 px-[20px] sm:px-[10%] lg:px-[15%]">
          <span className="text-[14px] sm:text-[16px] font-semibold">
            Join us for {'"'}Bhagirath{'"'}, a fun event made just for kids from
            government schools. It{"'"}s a day full of games, laughter, and
            learning. We promise it{"'"}ll be unforgettable! There{"'"}ll be
            exciting activities and workshops to spark creativity and make new
            friends. Let{"'"}s celebrate education and friendship together at
            Bhagirath - where every moment is special !! See you there!
          </span>
        </div>

        <div className=" flex justify-center my-8">
          <div className="bg-white  p-5 rounded-[20px]  font-medium">
            <div>
              <span>Date: 14th March, 2024</span>
            </div>
            <div className="mt-2">
              <span>Time: 01:00 PM - 02:00 PM at JC Bose Auditorium</span>
            </div>
            <div className="mt-2">
              <span>Time: 09:00 AM - 03:00 PM at Girls Hostel Garden</span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-wrap gap-x-[50px] gap-y-4 mt-5 px-[20px] sm:px-[10%] lg:px-[15%] justify-center items-center">
            <Image
              src={bhagirathOne}
              alt="bhagirathOne"
              className="w-[300px] rounded-md"
            />
            <Image
              src={bhagirathTwo}
              alt="bhagirathTwo"
              className="w-[300px] rounded-md"
            />
            <Image
              src={bhagirathThree}
              alt="bhagirathThree"
              className="w-[300px] rounded-md"
            />
            <Image
              src={bhagirathFour}
              alt="bhagirathFour"
              className="w-[300px] rounded-md"
            />
            <Image
              src={bhagirathFive}
              alt="bhagirathFive"
              className="w-[300px] rounded-md"
            />
            <Image
              src={bhagirathSix}
              alt="bhagirathSix"
              className="w-[300px] rounded-md"
            />
            <Image
              src={bhagirathSeven}
              alt="bhagirathSeven"
              className="w-[300px] rounded-md"
            />
            <Image
              src={bhagirathEight}
              alt="bhagirathEight"
              className="w-[300px] rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap  justify-center w-full text-center mt-[40px] gap-y-[30px]">
          {socialEventsCoordinator.map((coordinatorDetail, index) => (
            <div key={index}>
              {coordinatorDetail.eventName === "Bhagirath" && (
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

export default KAVYANJALI;
