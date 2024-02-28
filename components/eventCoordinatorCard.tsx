import Image, { StaticImageData } from "next/image";
import React from "react";

const EVENT_COORDINATOR_CARD = ({
  coordinatorPhoto,
  coordinatorName,
  coordinatorPost,
  coordinatorContact,
}: {
  coordinatorPhoto: StaticImageData;
  coordinatorName: string;
  coordinatorPost: string;
  coordinatorContact: string;
}) => {
  return (
    <>
      <div className=" w-full sm:w-[400px] border bg-white h-fit border-black  rounded-[20px] p-[20px]">
        <div className="flex justify-center">
          <Image
            src={coordinatorPhoto}
            alt="Photo"
            className="w-[100px] sm:w-[130px] aspect-square rounded-full -mt-[75px] sm:-mt-[95px] "
          />
        </div>

        <div className="mt-[10px]">
          <span className="text-[20px] sm:text-[24px] font-black  ">
            {coordinatorName}
          </span>
        </div>
        <div>
          <span className="text-[14px] sm:text-[16px]">{coordinatorPost}</span>
        </div>
        <div>
          <span className="text-[14px] sm:text-[16px]">
            {coordinatorContact}
          </span>
        </div>
      </div>
    </>
  );
};

export default EVENT_COORDINATOR_CARD;
