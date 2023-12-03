"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { loader } from "@/public";
import EVENT_REG_CARDS from "@/clientComponents/eventRegCard";

// const getEventDetails = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
//       cache: "no-cache",
//     });
//     const allEventList = res.json();

//     if (!res.ok) {
//       throw new Error("Failed to fetch events");
//     }
//     return allEventList;
//   } catch (error) {
//     console.log("Error:  ", error);
//   }
// };

import { getEventDetails } from "@/fetchData";

const EVENTLIST = () => {
  const [errorMessageDisplay, setErrorMessageDisplay] = useState({
    display: false,
    message: "",
  });
  const [successMessageDisplay, setSuccessMessageDisplay] = useState({
    display: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}`,
          {
            cache: "no-cache",
          }
        );

        if (!response.ok) {
          setErrorMessageDisplay({
            display: true,
            message: "Failed to fetch events. Unstable network detected!",
          });

          setTimeout(() => {
            setErrorMessageDisplay({ display: false, message: "" });
          }, 2000);
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        console.log(data);
        setEventData(data);
        setIsLoading(false);
      } catch (error) {
        setErrorMessageDisplay({
          display: true,
          message: "Failed to fetch events. Try again",
        });

        setTimeout(() => {
          setErrorMessageDisplay({ display: false, message: "" });
        }, 2000);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" px-[20px] min-h-[80vh] flex gap-5 flex-wrap justify-center my-[20px]">
        {eventData["pravahEventsList"] ? (
          <>
            {eventData["pravahEventsList"].length === 0 ? (
              <div>
                <span className="text-[16px] sm:text-[18px] font-bold uppercase">
                  No events available
                </span>
              </div>
            ) : (
              <>
                {eventData["pravahEventsList"].map(
                  (eventDetail: any, index: number) => (
                    <EVENT_REG_CARDS
                      key={index}
                      index={index}
                      eventDetail={eventDetail}
                    />
                  )
                )}
              </>
            )}
          </>
        ) : (
          <div className="text-center">
            <div className="leading-tight">
              <span className="font-black text-[28px] sm:text-[32px] md:text-[48px]">
                Pravah 2024
              </span>
            </div>
            <div>
              <span className="text-[16px] sm:text-[18px] font-bold uppercase">
                No events available
              </span>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="w-full min-h-[70vh] flex justify-center items-center">
            <div className="flex justify-center animate-spin ">
              <Image src={loader} alt="loader" className="w-[50px]" />
            </div>
          </div>
        )}
      </div>
      {errorMessageDisplay["display"] && (
        <div className=" w-[calc(100%-40px)] sm:w-fit text-center fixed left-[50%] z-[48] rounded-[10px] -translate-x-[50%] bottom-0 my-[20px] px-[10px] py-[7px] bg-red-500">
          <span className="font-semibold text-[12px] sm:text-[13px] text-white">
            {errorMessageDisplay["message"]}
          </span>
        </div>
      )}

      {successMessageDisplay["display"] && (
        <div className=" w-[calc(100%-40px)] sm:w-fit text-center fixed left-[50%] z-[48] rounded-[10px] -translate-x-[50%] bottom-0 my-[20px] px-[10px] py-[7px] bg-green-500 ">
          <span className="font-semibold text-[12px] sm:text-[13px] text-white">
            {successMessageDisplay["message"]}
          </span>
        </div>
      )}
    </>
  );
};

export default EVENTLIST;
