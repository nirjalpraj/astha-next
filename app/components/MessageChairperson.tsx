import Image from "next/image";
import React from "react";

const MessageChairperson = () => {
  return (
    <div className=" flex items-center w-full h-[90vh] my-20 bg-homeGrey  px-10">
      <div className="basis-1/3 w-100 mr-7 ">
        <div className="relative h-100   w-full">
          <Image
            src={"/chairperson.png"}
            width={330}
            height={250}
            className="absolute top-14 left-10 z-20 "
            alt="chairperson"
          />

          <Image
            src={"/blob1.png"}
            width={370}
            height={230}
            className="absolute top-24 left-9 z-10 "
            alt="chairperson"
          />

          <Image
            src={"/blob2.png"}
            width={340}
            height={260}
            className=" absolute z-0 top-24 left-20"
            alt="chairperson"
          />
          <h1 className="absolute z-20 top-[400px] left-36 text-white text-lg font-bold">
            Mr. John Doe
          </h1>
          <p className="absolute text-white z-20 top-[425px] left-44 text-xs  italic">
            Chairman
          </p>
        </div>
      </div>

      <div className="basis-2/3 p-8 bg-homeGrey rounded-2xl ">
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
    </div>
  );
};

export default MessageChairperson;
