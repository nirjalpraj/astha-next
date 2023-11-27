import Image from "next/image";
import React from "react";

const MessageChairperson = () => {
  return (
    <div className=" flex items-center w-full h-[90vh] my-20 bg-gradient-to-bl from-[#00D14E] via-[#009B39] to-[#fff] px-14 ">
      <div className="w-[60%] h-[84%] p-8 bg-homeGrey rounded-2xl ">
        <h4 className="text-5xl text-[#0C164B] font-bold">
          Message from Chairperson
        </h4>
        <h5 className="uppercase text-lg mt-4 mb-6">
          building resilence through harmonious cooperation
        </h5>
        <p>
          At Pioneer Home Lending, we treat each customer as an individual, not
          a number. We don't place you into a loan profile formula created by
          the banking industry. We use "common sense" and will help you obtain
          the best loan possible. We represent a wide range of "A" rated lenders
          with first quality rates to private "hardship" lenders.
        </p>
        <p className="mt-5">
          We work with more than 100 investors. This allows us to get you the
          best rates on all types of loan programs including: 30yr mortgage,
          20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS, 3yr ARMS, 5yr
          ARMS, Non-Owner Occupied (Investor) or Multi-Family, we'll fit your
          needs!
        </p>

        <button className="w-40 p-4 bg-normal mt-7 text-white rounded text-base font-medium ">
          Read More
        </button>
      </div>
      <div className="flex flex-col justify-center ml-32">
        <Image alt="" src="/chairman.png" width={320} height={320} />
        <h1 className="text-white text-lg mx-auto mt-5 font-bold">
          Mr. John Doe
        </h1>
        <div className="h1 text-white text-xs mx-auto italic">Chairman</div>
      </div>
    </div>
  );
};

export default MessageChairperson;
