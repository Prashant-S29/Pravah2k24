import EVENT_REG_CARDS from "@/clientComponents/eventRegCard";
import Link from "next/link";
import React from "react";

const getEventDetails = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
      cache: "no-store",
    });
    const allEventList = res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    return allEventList;
  } catch (error) {
    console.log("Error:  ", error);
  }
};

const EVENTLIST = async () => {
  const events = await getEventDetails();

  return (
    <>
      <div className=" px-[20px] min-h-[80vh] flex gap-5 flex-wrap justify-center my-[20px]">
        {Object.keys(events["pravahEventsList"]).length === 0 ? (
          <div>
            <span>Seem like there are no events</span>
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
        )}
      </div>
    </>
  );
};

export default EVENTLIST;
