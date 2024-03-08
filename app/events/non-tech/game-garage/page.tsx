import { eventCoordinators, socialEventsCoordinator } from "@/constant";
import React from "react";

import { ggOne, ggTwo, ggThree, ggFour, ggFive, ggSix } from "@/public";
import Image from "next/image";

const GAME_GARAGE = () => {
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
            GAME GARAGE
          </span>
        </div>
        <div className="mt-5 px-[20px] sm:px-[10%] lg:px-[15%]">
          <span className="text-[14px] sm:text-[16px] font-semibold">
            Get ready for an incredible time at the Game Garage event at Pravah!
            🎉🎪The game garage event at Pravah sounds like a total blast! 🎉 It
            {"'"}s organized by the mechanical department and features a
            carnival-style atmosphere with loads of fun games !! Let me tell you
            about some of the exciting games they have in store for you: These
            games are just a taste of the fun that awaits you at the event.
            Remember to mark the date, time, and venue in your calendar so you
            don{"'"}t miss out on the excitement. Get ready to have a blast and
            maybe even walk away with some awesome prizes! 🏆🎉
          </span>
        </div>

        <div className=" flex justify-center my-8">
          <div className="bg-white  p-5 rounded-[20px]  font-medium">
            <div>
              <span>Date: 13th - 14th and 15th March, 2024</span>
            </div>
            <div className="mt-2">
              <span>
                Time: 09:00 AM - 04:00 PM at D Garden, near Admin Block
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-wrap gap-x-[50px] gap-y-4 mt-5 px-[20px] sm:px-[10%] lg:px-[15%] justify-center items-center">
            <Image src={ggOne} alt="ggOne" className="w-[300px] rounded-md" />
            <Image src={ggTwo} alt="ggTwo" className="w-[300px] rounded-md" />
            <Image
              src={ggThree}
              alt="ggThree"
              className="w-[300px] rounded-md"
            />
            <Image src={ggFour} alt="ggFour" className="w-[300px] rounded-md" />
            <Image src={ggFive} alt="ggFive" className="w-[300px] rounded-md" />
            <Image src={ggSix} alt="ggSix" className="w-[300px] rounded-md" />
          </div>
        </div>
        <div className="flex flex-wrap  justify-center w-full text-center mt-[40px] gap-y-[30px]">
          {eventCoordinators.map((coordinatorDetail, index) => (
            <div key={index}>
              {coordinatorDetail.eventName === "gamegarage" && (
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

export default GAME_GARAGE;
