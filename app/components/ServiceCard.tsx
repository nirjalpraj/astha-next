import Image from "next/image";
import React from "react";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { service } from "../data/service";

const ServiceCard = (serviceData: service) => {
  return (
    <div className="w-[18rem] h-100 flex flex-col items-start">
      <Image
        alt=""
        src={serviceData.image}
        width={300}
        height={180}
        className="rounded"
      />
      <h1 className="text-normal text-2xl font-semibold self-start mt-4 mb-1 ">
        {serviceData.title}
      </h1>
      <p className="text-[#444444] mb-3">{serviceData.desc}</p>
      <span className="text-[#444444] font-semibold text-xl">Benefits</span>
      <p className="text-[#444444]">
        <HandshakeOutlinedIcon />
        <span className="ml-2">{serviceData.benefits.first}</span>
      </p>
      <p className="text-[#444444]">
        <SchoolOutlinedIcon />
        <span className="ml-2">{serviceData.benefits.second}</span>
      </p>

      <button className="text-white bg-normal rounded p-5 w-full text-xl font-semibold mt-9 ">
        View Detail
      </button>
    </div>
  );
};

export default ServiceCard;
