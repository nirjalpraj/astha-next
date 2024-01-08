"use client";
import React from "react";
import Notice from "./Notice";

const AboutUs = () => {
  return (
    <div className=" flex items-center  w-full h-[60vh] my-20  pl-5 pr-14 ">
      <div className="basis-2/3 p-8 text-justify ">
        <h4 className="text-5xl text-[#0C164B] font-bold">About Aastha</h4>
        <h5 className="uppercase text-lg font-light mt-3 mb-6">
          Introduction of cooperative name
        </h5>
        <p className="text-[#444444]">
          At Pioneer Home Lending, we treat each customer as an individual, not
          a number. We don't place you into a loan profile formula created by
          the banking industry. We use "common sense" and will help you obtain
          the best loan possible. We represent a wide range of "A" rated lenders
          with first quality rates to private "hardship" lenders.
        </p>
        <p className="mt-5 text-[#444444]">
          We work with more than 100 investors. This allows us to get you the
          best rates on all types of loan programs including: 30yr mortgage,
          20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS, 3yr ARMS, 5yr
          ARMS, Non-Owner Occupied (Investor) or Multi-Family, we'll fit your
          needs!
        </p>

        <button className="w-40 p-4 bg-normal mt-7 text-white rounded text-base font-medium ">
          About Us
        </button>
      </div>
      <div className="basis-1/3 w-full ">
        <Notice />
      </div>
    </div>
  );
};

export default AboutUs;
