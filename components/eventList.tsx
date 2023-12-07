"use client";

import React, { useState, useEffect } from "react";

import { getEventDetails } from "@/fetchData";
import PRELOADER_CARD from "@/clientComponents/preLoaderCard";
import EVENT_REG_CARDS from "@/clientComponents/eventRegCard";

const EVENTLIST = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await getEventDetails();
      if (data["pravahEventsList"]) {
        setIsLoading(false);
      }
      setEvents(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="mt-[20px] text-center">
          <span className="text-[32px] font-black">All Events</span>
        </div>
        <div className=" px-[20px] flex gap-5 flex-wrap justify-center my-[20px]">
          {isLoading ? (
            <>
              <PRELOADER_CARD />
              <PRELOADER_CARD />
              <PRELOADER_CARD />
            </>
          ) : (
            <>
              {events["pravahEventsList"] ? (
                events["pravahEventsList"].length === 0 ? (
                  <div>
                    <span className="text-[16px] sm:text-[18px] font-bold uppercase">
                      No events available
                    </span>
                  </div>
                ) : (
                  <>
                    {events["pravahEventsList"].map(
                      (eventDetail: any, index: number) => (
                        <EVENT_REG_CARDS
                          key={index}
                          index={index}
                          eventDetail={eventDetail}
                        />
                      )
                    )}
                  </>
                )
              ) : (
                ""
              )}
            </>
          )}

          {events["pravahEventsList"] &&
            events["pravahEventsList"].length === 0 && (
              <div>
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
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default EVENTLIST;
