"use client";

import TRANSITION_WRAPPER from "@/clientComponents/transition";
import React from "react";
import './team.css'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import MemberCard from "@/clientComponents/memberCard";
import { team } from "@/constant";
const TEAM_OBJECT = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1>
              Meet our team
            </h1>
            <p className="lead font-weight-normal mt-4" style={{ color: '#111827', marginBottom: '3.5em' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum risus id tortor. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante?</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {team.map((data)=>(
           <div className="col">

            <MemberCard data={data} key={data.id}/>
           </div>
        ))}
        </div>
      </div>
    </>

  );
};

const TEAM = () => {
  return TRANSITION_WRAPPER(TEAM_OBJECT);
};

export default TEAM;