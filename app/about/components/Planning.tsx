import Image from "next/image";
import React from "react";

const Planning = () => {
  return (
    <div className="  w-full h-[75vh] my-20 px-14">
      <div className="flex items-center p-10 bg-homeGrey h-full rounded-xl ">
        <div className="basis-1/2 p-8 rounded-2xl ">
          <h4 className="text-5xl text-[#0C164B] font-bold">Planning</h4>
          <h5 className="uppercase text-lg mt-2 mb-4 font-bold">
            “Unity in Innovation, Excellence in Execution”
          </h5>
          <p className="text-gray-800 text-base leading-5">
            At Pioneer Home Lending, we treat each customer as an individual,
            not a number. We don't place you into a loan profile formula created
            by the banking industry. We use "common sense" and will help you
            obtain the best loan possible. We represent a wide range of "A"
            rated lenders with first quality rates to private "hardship"
            lenders.
          </p>
          <p className="mt-5 text-gray-800 text-base leading-5">
            We work with more than 100 investors. This allows us to get you the
            best rates on all types of loan programs including: 30yr mortgage,
            20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS, 3yr ARMS, 5yr
            ARMS, Non-Owner Occupied (Investor) or Multi-Family, we'll fit your
            needs!
          </p>
        </div>
        <div className="basis-1/2 w-100 mr-7 ">
          <Image
            src={"/vision.jpg"}
            width={600}
            height={450}
            alt="vision"
            className="rounded-tl-3xl rounded-br-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Planning;
