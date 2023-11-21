"use client";

import React from "react";
import TRANSITION_WRAPPER from "../../clientComponents/transition";
import {
  ANIMATEDTEXT10,
  ANIMATEDTEXT11,
  TYPINGTEXT,
} from "@/clientComponents/motionDiv";
import Link from "next/link";

const ABOUT_OBJECT = () => {
  return (
    <>
      <div className="min-h-[80vh]  rounded-[20px] flex justify-center items-center text-center ">
        <div>
          <div>
            <div>
              <TYPINGTEXT title="Annual Techno Cultural Fest" />
              <ANIMATEDTEXT10 />
            </div>
            <div className="mx-[20px] lg:mx-[200px] text-[15px] sm:text-[16px]">
              <span>
                PRAVAH, the Annual College Fest, embodies the realization of a
                modest dream. This vibrant extravaganza has been meticulously
                organized since its inception and is now gearing up to
                commemorate 17 years of honoring creativity, vitality, and
                aesthetics in the realms of Sports, Technical, Non-Technical,
                and Cultural events. With a diverse array of over one hundred
                events falling under these categories, PRAVAH serves as the
                platform for numerous intra and inter-collegiate competitions.
                Envisaging a significant turnout of approximately 7-8 thousand
                students from all corners of India across various event domains,
                PRAVAH continues to uphold its tradition of attracting talent on
                a national scale. Keeping in line with this rich legacy, PRAVAH
                2024 aspires to draw forth talents from different corners of
                India, fostering growth in literary, technical, cultural, and
                social skills.
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-[20px] sm:mt-[50px]">
            <Link href="/events">
              <button className="px-[15px] py-[8px] rounded-[10px] bg-black  border-black text-white text-[14px] font-semibold">
                Explore Pravah 2024
              </button>
            </Link>
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
                  PRAVAH aspires to craft the quintessential human experience,
                  where the seeds of lasting friendships are sown, and memories
                  are not just made but exalted. It envisions itself as the
                  premier festival in India, embodying the very essence of
                  spirited participation and joyous celebration, fueled by the
                  energy of the dynamic young minds from national institutes.
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
                  PRAVAH endeavors to establish itself as a versatile platform,
                  a canvas where talents across diverse fields converge to
                  embark on a shared journey of learning and collective growth.
                  Through an array of captivating cultural, technical,
                  non-technical, sports, and social events, PRAVAH seeks to
                  curate an unforgettable experience, leaving participants with
                  memories that resonate for a lifetime.
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
                  To foster a welcoming atmosphere that encourages interaction
                  and joyful celebration. To champion cultural diversity and
                  elevate the knowledge and skills of each individual. To
                  advocate for human values, social skills, and ethics through a
                  variety of engaging social events. To offer a respite from the
                  monotony of academic pursuits. To cultivate leadership,
                  managerial, and entrepreneurship skills among students.
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
