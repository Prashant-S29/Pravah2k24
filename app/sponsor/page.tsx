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
  kiddie,
  teaconnect,
  jjsh,
  tcc,
  fastpizza,
  gameful,
  padit,
  kingqueen,
  treasure,
  ehcc,
  whatsapp,
  linkedin,
  tos,
  sm,
  dreamcafe,
  foodGallery,
  ace,
  vision,
  hurricane,
} from "@/public";
import { sponsorFormContact } from "@/constant";

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

          <div className="text-center flex gap-[20px] flex-wrap justify-evenly mt-[50px] ">
            <div>
              <div className="leading-none">
                <span className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px]">
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
                <span className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px]">
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
            <div>
              <div className="leading-none">
                <span className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px]">
                  Drink Partner
                </span>
              </div>
              <div className="flex justify-center mt-3">
                <Image
                  src={hurricane}
                  alt="hurricane"
                  className="w-[300px] sm:w-[350px]"
                />
              </div>
            </div>
            <div>
              <div className="leading-none">
                <span className="font-extrabold text-[28px] sm:text-[36px] md:text-[40px]">
                  Health Partner
                </span>
              </div>
              <div className="flex justify-center items-center mt-[50px]">
                <Image
                  src={ehcc}
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

            <div className="flex justify-center mt-5 items-center px-[20px] flex-wrap gap-[30px]">
              <div className=" sm:mt-0 mt-3">
                <Image
                  src={academy}
                  alt="academy"
                  className="w-[180px] sm:w-[280px]"
                />
              </div>

              <div>
                <Image
                  src={mother}
                  alt="mother"
                  className="w-[320px] sm:w-[280px]"
                />
              </div>

              <div>
                <Image
                  src={vision}
                  alt="vision"
                  className="w-[150px] sm:w-[280px]"
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
              <div>
                <Image
                  src={kiddie}
                  alt="kiddie"
                  className="w-[200px] sm:w-[400px]"
                />
              </div>
              <div>
                <Image
                  src={padit}
                  alt="padit"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>

              <div>
                <Image
                  src={teaconnect}
                  alt="teaconnect"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>
              <div>
                <Image
                  src={jjsh}
                  alt="jjsh"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>

              <div>
                <Image src={tcc} alt="tcc" className="w-[150px] sm:w-[200px]" />
              </div>

              <div>
                <Image
                  src={fastpizza}
                  alt="fastpizza"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>

              <div>
                <Image
                  src={gameful}
                  alt="gameful"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>

              <div>
                <Image
                  src={kingqueen}
                  alt="kingqueen"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>

              <div>
                <Image
                  src={treasure}
                  alt="treasure"
                  className="w-[200px] sm:w-[250px]"
                />
              </div>

              <div>
                <Image src={sm} alt="sm" className="w-[150px] sm:w-[200px]" />
              </div>

              <div>
                <Image src={tos} alt="tos" className="w-[150px] sm:w-[200px]" />
              </div>

              <div>
                <Image
                  src={dreamcafe}
                  alt="dreamcafe"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>

              <div>
                <Image
                  src={foodGallery}
                  alt="foodGallery"
                  className="w-[150px] sm:w-[200px]"
                />
              </div>
              <div>
                <Image src={ace} alt="ace" className="w-[150px] sm:w-[200px]" />
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
      <div className="text-center">
        <span className="font-semibold">For more information contact</span>
      </div>
      <div className="flex flex-wrap mt-[10px] justify-center gap-[20px]">
        <div className="flex flex-wrap justify-evenly w-full text-center mt-[10px] gap-y-[30px]">
          {sponsorFormContact.map((details, index) => (
            <div
              key={index}
              className="p-[15px] border border-black rounded-[15px] w-[300px] bg-white"
            >
              <div>
                <span className="font-bold">{details.memberName}</span>
              </div>
              <div className="leading-tight">
                <span className="text-[15px] ">{details.memberPhone}</span>
              </div>
              <div className="leading-tight">
                <span className="text-[14px] ">Sponsor Committee</span>
              </div>
              <div className="w-full flex justify-center gap-[30px] mt-[10px]  -mb-[35px]">
                <div className="p-[8px] rounded-full w-fit flex justify-center bg-black ">
                  <Link
                    href={`https://wa.me/91${details.memberPhone}`}
                    target="_blank"
                  >
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      className="w-[20px] aspect-square"
                    />
                  </Link>
                </div>
                <div className="p-[7px] rounded-full w-fit flex justify-center bg-black ">
                  <Link href={details.memberLinkedIn} target="_blank">
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="w-[21px] aspect-square"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SPONSOR = () => {
  return TRANSITION_WRAPPER(SPONSOR_OBJECT);
};

export default SPONSOR;
