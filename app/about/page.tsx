"use client";

import React from "react";
import TRANSITION_WRAPPER from "../../clientComponents/transition";
import {
  ANIMATEDTEXT10,
  ANIMATEDTEXT11,
  TYPINGTEXT,
} from "@/clientComponents/motionDiv";

const ABOUT_OBJECT = () => {
  return (
    <>
      <div className="min-h-[80vh]  rounded-[20px] flex justify-center items-center text-center ">
        <div>
          <div>
            <div>
              <TYPINGTEXT title="About Pravah" />
              <ANIMATEDTEXT10 />
            </div>
            <div className="mx-[20px] lg:mx-[200px] text-[15px] sm:text-[16px]">
              <span>
                The Annual College Fest PRAVAH is a culmination of this humble
                aspiration. This prolific extravaganza has been organized since
                the inception and is all set to complete 16 glorious years of
                celebrating creativity, vigor and aesthetics in the field of
                Sports, Technical, Non-Technical and Cultural events. Over one
                hundred events assorted under the above mentioned areas, PRAVAH
                hosts several intra and inter collegiate competitions. In all
                domains of events, we expect a foot fall of about 7-8 thousand
                students from all over India. In continuance of the same
                tradition, PRAVAH 2023 envisages a flow of talents from
                different corners of India and aims to foster the literary,
                technical, cultural and social skills.
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-[20px] sm:mt-[50px]">
            <button className="px-[15px] py-[8px] rounded-[10px] bg-black  border-black text-white text-[14px] font-semibold">
              Explore Pravah 2024
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[50px] h-fit  rounded-[20px] flex justify-center items-center text-center">
        <div>
          <div>
            <TYPINGTEXT title="About SKIT" />
            <ANIMATEDTEXT11 />
          </div>
          <div className="mx-[20px] lg:mx-[200px] text-[15px] sm:text-[16px]">
            <span>
              Inspired by the timeless wisdom of Swami Keshvanand, embarked on
              its academic journey in the year 2000, thanks to the visionaries
              at the Technocrats and Managers Society of Advanced Learning and
              Gramothan.SKIT has blossomed into a beacon of academic brilliance
              in Northern India. We take immense pride in fostering creativity
              and personal growth through our diverse range of 35+ clubs which
              encompass a wide spectrum of interests, ranging from recreational
              to technical to cultural thus creating a multiverse of
              opportunities for our students to explore!
            </span>
          </div>
          <div className="block sm:flex flex-wrap gap-x-[50px] gap-y-5 justify-center items-center mt-[50px] px-[20px]">
            <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] p-[20px] bg-white  rounded-[20px] border border-black">
              <div>
                <span className="text-[24px] sm:text-[28px] md:text-[32px] font-black">
                  VISION
                </span>
              </div>
              <div className="text-[15px] sm:text-[16px] w-full mt-[10px] h-fit sm:h-[250px] overflow-y-scroll">
                <span>
                  PRAVAH aspires to manifest the ultimate human experience where
                  bonds to friendships begin and memories are created and
                  glorified. To be the grandest fest of India which effectuates
                  the spirit of participation and celebration with the vigor of
                  the young brigade of the National institutes.
                </span>
              </div>
            </div>
            <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] p-[20px] bg-white my-[20px] md:my-0  rounded-[20px] border border-black">
              <div>
                <span className="text-[24px] sm:text-[28px] md:text-[32px] font-black">
                  MISSION
                </span>
              </div>
              <div className="text-[15px] sm:text-[16px]  w-full mt-[10px]  h-fit sm:h-[250px] overflow-y-scroll">
                <span>
                  PRAVAH strive to make it a platform to showcase talent in most
                  of the fields where the journey of learning and growing
                  together takes place. To provide an experience for lifetime by
                  showcasing a stunning set of cultural, technical,
                  non-technical, sports, and social events.
                </span>
              </div>
            </div>
            <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] p-[20px] bg-white  rounded-[20px] border border-black">
              <div>
                <span className="text-[24px] sm:text-[28px] md:text-[32px] font-black">
                  OBJECTIVES
                </span>
              </div>
              <div className="text-[15px] sm:text-[16px] w-full mt-[10px]  h-fit sm:h-[250px] overflow-y-scroll">
                <span>
                  To provide a congenial environment for all to interact and
                  celebrate amusedly. To promote the cultural diversity and
                  upscale the knowledge and skills of an individual. To promote
                  human values, social skills and ethics through various social
                  events. To provide a getaway from monotony of academics. To
                  promote leadership, managerial and entrepreneurship skills
                  among students.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ABOUT = () => {
  return TRANSITION_WRAPPER(ABOUT_OBJECT);
};

export default ABOUT;
