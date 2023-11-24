import EVENTS_LIST from "@/clientComponents/adminPanel/events_list";
import ADMIN_PANEL_NAVBAR from "@/components/adminpanel_navbar";
import React from "react";

const ADMIN_PANEL = () => {
  return (
    <>
      <div className="w-full">
        <ADMIN_PANEL_NAVBAR />
        <EVENTS_LIST />
      </div>
    </>
  );
};

export default ADMIN_PANEL;
