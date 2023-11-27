import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceHome, service } from "../data/service";

const Help = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <h1 className="text-5xl  font-bold mx-auto">
        How We Can <span className="text-normal">Help You </span>
      </h1>
      <div className="flex flex-row justify-around mt-10">
        {serviceHome.map((item: service) => {
          return (
            <ServiceCard
              title={item.title}
              image={item.image}
              desc={item.desc}
              benefits={item.benefits}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
