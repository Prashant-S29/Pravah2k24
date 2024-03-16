"use client"

import SPONSORUSFORM from "@/clientComponents/sponsorUsForm";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import React from "react";


const SPONSORFORM_OBJECT = () => {
  return(
<>
      <div>
        <SPONSORUSFORM />
      </div>
    </>
  )
}


const SPONSORFORM = () => {
  return (
    TRANSITION_WRAPPER(SPONSORFORM_OBJECT)
  );
};

export default SPONSORFORM;
