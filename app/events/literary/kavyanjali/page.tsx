import { socialEventsCoordinator } from "@/constant";
import React from "react";

import {
  kavOne,
  kavTwo,
  kavThree,
  kavFour,
  kavFive,
  kavSix,
  kavSeven,
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
            {'"'}Kavyanjali{'"'} is the cultural extravaganza of the entire
            fest. Poetry as an experience allow us to weave our own thoughts and
            ideas, dreams and hopes into an art form . The poets created an
            atmosphere for their creative pieces with their outstanding
            deliveries. This event is a poetic symphony , a fusion of art and an
            exploration of the immense world of beauty that poetry unveils.
            Artists and poets will be invited from all over the country to
            showcase their talents and share a glimpse of it.
          </span>
        </div>

        <div className=" flex justify-center my-8">
          <div className="bg-white  p-5 rounded-[20px]  font-medium">
            <div>
              <span>Date: 14th March, 2024</span>
            </div>
            <div className="mt-2">
              <span>Time: 02:00 PM - 04:00 PM at Gyan Mandir Auditorium</span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-wrap gap-x-[50px] gap-y-4 mt-5 px-[20px] sm:px-[10%] lg:px-[15%] justify-center items-center">
            <Image src={kavOne} alt="kavOne" className="w-[300px] rounded-md" />
            <Image src={kavTwo} alt="kavTwo" className="w-[300px] rounded-md" />
            <Image
              src={kavThree}
              alt="kavThree"
              className="w-[300px] rounded-md"
            />
            <Image
              src={kavFour}
              alt="kavFour"
              className="w-[300px] rounded-md"
            />
            <Image
              src={kavFive}
              alt="kavFive"
              className="w-[300px] rounded-md"
            />
            <Image src={kavSix} alt="kavSix" className="w-[300px] rounded-md" />
            <Image
              src={kavSeven}
              alt="kavSeven"
              className="w-[300px] rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap  justify-center w-full text-center mt-[40px] gap-y-[30px]">
          {socialEventsCoordinator.map((coordinatorDetail, index) => (
            <div key={index}>
              {coordinatorDetail.eventName === "kav" && (
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
