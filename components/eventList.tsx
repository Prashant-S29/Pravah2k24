import React from "react";
import EVENT_REG_CARDS from "@/clientComponents/eventRegCard";

import { getEventDetails } from "@/fetchData";

const EVENTLIST = async () => {
  const eventData = await getEventDetails();
  // console.log("eventDetails", eventData);
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

      </div>
    </>
  );
};

export default EVENTLIST;
