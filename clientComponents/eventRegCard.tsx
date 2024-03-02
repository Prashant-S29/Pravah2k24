"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EVENT_REG_CARDS = ({ index, eventDetail }) => {
  const remainingSlots =
    eventDetail.eventMaxParicipationLimit.split("-")[0] -
    eventDetail.eventCurrentParticipation;

  const [detailDisplay, setDetailDisplay] = useState(false);

  const [showRegistrationConfirmation, setRegistrationConfirmation] =
    useState(false);

  const [registrationTeamType, setRegistrationTeamType] = useState(1);

  const [registrationLinkAndPrice, setRegistrationLinkAndPrice] = useState({
    link: "",
    price: "",
  });

  return (
    <>
      <div
        key={index}
        className="w-full sm:w-fit h-fit block gap-5 bg-white rounded-[20px] border border-black p-[10px]"
      >
        <div className="flex justify-center overflow-hidden w-full sm:w-[300px]  h-[200px]">
          <div
            className="duration-300 rounded-[17px] w-full sm:w-[300px]"
            style={
              detailDisplay
                ? { transform: "translateY(-100%)" }
                : {
                    transform: "translateY(0)",
                  }
            }
          >
            <div>
              <Image
                src={eventDetail.eventPhoto}
                alt="lol"
                className="object-cover object-top rounded-[17px] w-full sm:w-[300px] h-[200px]"
                width={300}
                height={200}
                priority={true}
              />
            </div>
            <div className="text-center font-medium  w-full sm:w-[300px] h-[200px] bg-slate-200 flex justify-center items-center rounded-[17px]   py-[10px] ">
              <div className="px-[10px] text-[14px]  sm:text-[16px]">
                {/* <div>
                  <span>
                    Registration Fee: <b>₹{eventDetail.eventRegistrationFee}</b>
                    /- {eventDetail.eventType}
                  </span>
                </div> */}
                {/* <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" /> */}
                <div>
                  <span>Date: {eventDetail.eventDate}</span>
                </div>
                <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" />

                <div>
                  <span>Time: {eventDetail.eventTime}</span>
                </div>
                <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" />

                <div>
                  <span>Venue: {eventDetail.eventVenue}</span>
                </div>
                {eventDetail.eventMaxParicipationLimit.split("-")[1] && (
                  <div>
                    <div className="w-full h-[0.5px] bg-black rounded-full my-[5px]" />
                    <div className="w-[250px] whitespace-nowrap overflow-x-scroll">
                      <span>
                        Queries: +91{" "}
                        {eventDetail.eventMaxParicipationLimit.split("-")[1]} -{" "}
                        {eventDetail.eventMaxParicipationLimit.split("-")[2]}
                      </span>
                    </div>  
                  </div>
                )}
                <div className="mt-3">
                  <Link
                    href={eventDetail.eventBrochure.replace("http", "https")}
                    target="_blank"
                    className="w-full flex justify-center px-[20px] py-[5px] text-[12px] sm:text-[14px] font-semibold text-white bg-black rounded-[8px]"
                  >
                    View Rule Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[10px]  text-center  ">
          <div className="w-full flex justify-center">
            <div className="w-[300px] whitespace-nowrap text-center overflow-scroll">
              <span className="text-[20px] font-extrabold">
                {eventDetail.eventName}
              </span>
            </div>
          </div>
        </div>
        <div className="text-center duration-300 "></div>

        <div className="w-full flex mt-2  justify-center gap-2">
          {remainingSlots > 0 ? (
            <div className="w-full">
              {eventDetail.eventRegistrationFeeOne.split("-")[0] === "0" ? (
                <Link
                  href={eventDetail.eventRegistrationLinkOne}
                  target="_blank"
                >
                  <div
                    className="w-full px-[20px] py-[8px] text-[12px] whitespace-nowrap sm:text-[14px] font-semibold text-white bg-black rounded-[8px]"
                    tabIndex={-1}
                  >
                    <span>Register - Free</span>
                  </div>
                </Link>
              ) : (
                <button
                  className="w-full px-[20px] py-[8px] text-[12px] whitespace-nowrap sm:text-[14px] font-semibold text-white bg-black rounded-[8px]"
                  tabIndex={-1}
                  onClick={() => {
                    setRegistrationConfirmation(true);
                    setRegistrationLinkAndPrice({
                      link: eventDetail.eventRegistrationLinkOne,
                      price: eventDetail.eventRegistrationFeeOne.split("-")[0],
                    });
                  }}
                >
                  Register
                </button>
              )}
            </div>
          ) : (
            ""
          )}

          <div className="w-full">
            <button
              className="w-full px  -[20px] py-[8px] text-[12px] sm:text-[14px] font-semibold text-white bg-black rounded-[8px]"
              onClick={(e) => {
                setDetailDisplay(!detailDisplay);
              }}
            >
              {detailDisplay ? "Hide Details" : "Show Details"}
            </button>
          </div>
        </div>
      </div>
      {showRegistrationConfirmation && (
        <div
          className="z-[100] w-full min-h-screen top-0 left-0 fixed flex justify-center p-[20px] items-center bg-[#00000048] 
        backdrop-blur-[5px] select-none"
        >
          <div className="p-[20px] bg-white border border-gray-500 rounded-[20px]">
            <div>
              <div>
                <span className="text-[14px]">
                  Confirm my Registration in{" "}
                  <span className="font-bold">{eventDetail.eventName} </span>
                  as
                </span>
              </div>
              <div className="max-h-[400px] overflow-y-scroll pb-5 showScrollBar">
                <div className="text-[14px]">
                  {eventDetail.eventRegistrationLinkOne != "" && (
                    <div
                      className={`w-full px-[10px] py-2  cursor-pointer rounded-[7px] border-[2px]  leading-snug mt-2
                    ${
                      registrationTeamType === 1
                        ? "border-green-500 bg-white"
                        : " bg-gray-100"
                    }
                    `}
                      onClick={() => {
                        setRegistrationTeamType(1);

                        setRegistrationLinkAndPrice({
                          link: eventDetail.eventRegistrationLinkOne,
                          price:
                            eventDetail.eventRegistrationFeeOne.split("-")[0],
                        });
                      }}
                    >
                      <div>
                        <span className="font-bold capitalize">
                          {
                            eventDetail.eventRegistrationTeamTypeOne.split(
                              "-"
                            )[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Team Size -{" "}
                          {
                            eventDetail.eventRegistrationTeamTypeOne.split(
                              "-"
                            )[1]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Registration Fee - ₹
                          {eventDetail.eventRegistrationFeeOne.split("-")[0]}/-
                        </span>
                      </div>
                    </div>
                  )}
                  {eventDetail.eventRegistrationLinkTwo != "" && (
                    <div
                      className={`w-full px-[10px] py-2  cursor-pointer rounded-[7px] border-[2px]  leading-snug mt-2  ${
                        registrationTeamType === 2
                          ? "border-green-500 bg-white"
                          : " bg-gray-100"
                      }`}
                      onClick={() => {
                        setRegistrationTeamType(2);

                        setRegistrationLinkAndPrice({
                          link: eventDetail.eventRegistrationLinkTwo,
                          price: eventDetail.eventRegistrationFeeTwo,
                        });
                      }}
                    >
                      <div>
                        <span className="font-bold capitalize">
                          {
                            eventDetail.eventRegistrationTeamTypeTwo.split(
                              "-"
                            )[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Team Size -{" "}
                          {
                            eventDetail.eventRegistrationTeamTypeTwo.split(
                              "-"
                            )[1]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Registration Fee - ₹
                          {eventDetail.eventRegistrationFeeTwo}/-
                        </span>
                      </div>
                    </div>
                  )}
                  {eventDetail.eventRegistrationLinkThree != "" && (
                    <div
                      className={`w-full px-[10px] py-2  cursor-pointer rounded-[7px] border-[2px]  leading-snug mt-2  ${
                        registrationTeamType === 3
                          ? "border-green-500 bg-white"
                          : " bg-gray-100"
                      }`}
                      onClick={() => {
                        setRegistrationTeamType(3);

                        setRegistrationLinkAndPrice({
                          link: eventDetail.eventRegistrationLinkThree,
                          price: eventDetail.eventRegistrationFeeThree,
                        });
                      }}
                    >
                      <div>
                        <span className="font-bold capitalize">
                          {
                            eventDetail.eventRegistrationTeamTypeThree.split(
                              "-"
                            )[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Team Size -{" "}
                          {
                            eventDetail.eventRegistrationTeamTypeThree.split(
                              "-"
                            )[1]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Registration Fee - ₹
                          {eventDetail.eventRegistrationFeeThree}/-
                        </span>
                      </div>
                    </div>
                  )}
                  {eventDetail.eventRegistrationLinkFour != "" && (
                    <div
                      className={`w-full px-[10px] py-2  cursor-pointer rounded-[7px] border-[2px]  leading-snug mt-2  ${
                        registrationTeamType === 4
                          ? "border-green-500 bg-white"
                          : " bg-gray-100"
                      }`}
                      onClick={() => {
                        setRegistrationTeamType(4);

                        setRegistrationLinkAndPrice({
                          link: eventDetail.eventRegistrationLinkFour,
                          price: eventDetail.eventRegistrationFeeFour,
                        });
                      }}
                    >
                      {" "}
                      <div>
                        <span className="font-bold">
                          {
                            eventDetail.eventRegistrationTeamTypeFour.split(
                              "-"
                            )[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Team Size -{" "}
                          {
                            eventDetail.eventRegistrationTeamTypeFour.split(
                              "-"
                            )[1]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Registration Fee - ₹
                          {eventDetail.eventRegistrationFeeFour}/-
                        </span>
                      </div>
                    </div>
                  )}
                  {eventDetail.eventRegistrationLinkFive != "" && (
                    <div
                      className={`w-full px-[10px] py-2  cursor-pointer rounded-[7px] border-[2px]  leading-snug mt-2  ${
                        registrationTeamType === 5
                          ? "border-green-500 bg-white"
                          : " bg-gray-100"
                      }`}
                      onClick={() => {
                        setRegistrationTeamType(5);

                        setRegistrationLinkAndPrice({
                          link: eventDetail.eventRegistrationLinkFive,
                          price: eventDetail.eventRegistrationFeeFive,
                        });
                      }}
                    >
                      {" "}
                      <div>
                        <span className="font-bold">
                          {
                            eventDetail.eventRegistrationTeamTypeFive.split(
                              "-"
                            )[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Team Size -{" "}
                          {
                            eventDetail.eventRegistrationTeamTypeFive.split(
                              "-"
                            )[1]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Registration Fee - ₹
                          {eventDetail.eventRegistrationFeeFive}/-
                        </span>
                      </div>
                    </div>
                  )}
                  {eventDetail.eventRegistrationLinkSix != "" && (
                    <div
                      className={`w-full px-[10px] py-2  cursor-pointer rounded-[7px] border-[2px]  leading-snug mt-2  ${
                        registrationTeamType === 6
                          ? "border-green-500 bg-white"
                          : " bg-gray-100"
                      }`}
                      onClick={() => {
                        setRegistrationTeamType(6);

                        setRegistrationLinkAndPrice({
                          link: eventDetail.eventRegistrationLinkSix,
                          price: eventDetail.eventRegistrationFeeSix,
                        });
                      }}
                    >
                      {" "}
                      <div>
                        <span className="font-bold capitalize">
                          {
                            eventDetail.eventRegistrationTeamTypeSix.split(
                              "-"
                            )[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Team Size -{" "}
                          {
                            eventDetail.eventRegistrationTeamTypeSix.split(
                              "-"
                            )[1]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Registration Fee - ₹
                          {eventDetail.eventRegistrationFeeSix}/-
                        </span>
                      </div>
                    </div>
                  )}
                  {eventDetail.eventRegistrationLinkSeven != "" && (
                    <div
                      className={`w-full px-[10px] py-2  cursor-pointer rounded-[7px] border-[2px]  leading-snug mt-2  ${
                        registrationTeamType === 7
                          ? "border-green-500 bg-white"
                          : " bg-gray-100"
                      }`}
                      onClick={() => {
                        setRegistrationTeamType(7);

                        setRegistrationLinkAndPrice({
                          link: eventDetail.eventRegistrationLinkSeven,
                          price: eventDetail.eventRegistrationFeeSeven,
                        });
                      }}
                    >
                      {" "}
                      <div>
                        <span className="font-bold">
                          {
                            eventDetail.eventRegistrationTeamTypeSeven.split(
                              "-"
                            )[0]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Team Size -{" "}
                          {
                            eventDetail.eventRegistrationTeamTypeSeven.split(
                              "-"
                            )[1]
                          }
                        </span>
                      </div>
                      <div>
                        <span>
                          Registration Fee - ₹
                          {eventDetail.eventRegistrationFeeSeven}/-
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="block sm:flex gap-[15px] ">
                <div className="w-full">
                  <Link href={registrationLinkAndPrice.link} target="_blank">
                    <button className="w-full mt-3 px-[20px] py-[8px] text-[12px] whitespace-nowrap sm:text-[13px] font-semibold text-white bg-black rounded-[8px]">
                      Register - ₹{registrationLinkAndPrice.price}/-
                    </button>
                  </Link>
                </div>
                <div className="w-full">
                  <button
                    className="w-full mt-3 px-[20px] py-[8px] whitespace-nowrap text-[12px] sm:text-[13px] font-semibold text-black bg-gray-300 rounded-[8px]"
                    onClick={() => {
                      setRegistrationConfirmation(false);
                    }}
                  >
                    cancel and return
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EVENT_REG_CARDS;
