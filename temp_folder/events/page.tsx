
"use client";

// import React from "react";

// import { priorEvents } from "@/constant";
// import TRANSITION_WRAPPER from "../../clientComponents/transition";
// import Image from "next/image";

// const EVENTS_OBJECT = () => {
//   return (
//     <>
//       <div className="font-medium text-center my-[10px] mx-[20px] text-[14px] sm:text-[16px]">
//         <span>Highlights</span>
//       </div>
//       <div className="text-center leading-none">
//         <span className="text-[30px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-black">
//           Prior Events
//         </span>
//       </div>
//       <div className=" px-[20px] flex gap-5 flex-wrap justify-center my-[20px]">
//         {priorEvents.map((eventDetail, index) => (
//           <div
//             key={index}
//             className="w-full sm:w-fit h-fit block gap-5 bg-white rounded-[20px] border border-black p-[10px]"
//           >
//             <div className="flex justify-center">
//               <Image
//                 src={eventDetail.eventPhoto}
//                 alt={eventDetail.eventName}
//                 blurDataURL={eventDetail.eventPhoto.src}
//                 placeholder="blur"
//                 className="object-cover object-top rounded-[17px] w-full sm:w-[250px] h-[200px]"
//               />
//             </div>
//             <div className="mt-[10px]  text-center  ">
//               <div>
//                 <span className="text-[20px] font-extrabold">
//                   {eventDetail.eventName}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

import React from "react";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import EVENT_CATEGORY_CRAD from "@/clientComponents/eventCategoryCard";
import { eventCategoryDesc } from "@/constant";

const EVENTS_OBJECT = () => {
  return (
    <>
      <div className="w-full min-h-[80vh] ">
        <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black ">
          <span>Pravah 24 Events</span>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-center mt-[50px] sm:mt-0 px-[10px]">
          {eventCategoryDesc.map((eventCategory, index) => (
            <EVENT_CATEGORY_CRAD
              key={index}
              eventCategory={eventCategory}
              imageState={index === 0 ? false : true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const EVENTS = () => {
  return TRANSITION_WRAPPER(EVENTS_OBJECT);
};

export default EVENTS;

// "use client";

// import React from "react";
// import TRANSITION_WRAPPER from "@/clientComponents/transition";
// import EVENT_CATEGORY_CRAD from "@/clientComponents/eventCategoryCard";
// import { eventCategoryDesc } from "@/constant";

// const EVENTS_OBJECT = () => {
//   return (
//     <>
//       <div className="w-full min-h-[80vh] ">
//         <div className="text-center  text-[28px] md:text-[42px] lg:text-[58px] font-black ">
//           <span>Pravah 24 Events</span>
//         </div>
//         <div className="flex flex-wrap gap-[20px] justify-center mt-[50px] sm:mt-0 px-[10px]">
//           {eventCategoryDesc.map((eventCategory, index) => (
//             <EVENT_CATEGORY_CRAD
//               key={index}
//               eventCategory={eventCategory}
//               imageState={index === 0 ? false : true}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };