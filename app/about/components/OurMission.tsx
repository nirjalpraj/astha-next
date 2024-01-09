import React from "react";

import { mission, missionAbout } from "@/app/data/mission";
import Image from "next/image";

const OurMission = () => {
  return (
    <div className="h-[100vh] w-full px-14">
      <div className="grid grid-rows  justify-items-center ">
        <h1 className=" font-bold text-5xl mb-2">Our Mission</h1>
        <h1 className=" uppercase text-xl font-light">
          how we are transforming societies
        </h1>
      </div>
      <section className="flex flex-row mt-10">
        <div className="basis-[65%] w-full">
          <div className="grid grid-cols-2 gap-10  pr-16">
            {missionAbout.map((item: mission) => {
              return (
                <div className="flex flex-col">
                  <Image src={item.img} width={60} height={60} alt="badges" />
                  <h1 className="font-bold text-2xl mt-2">{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-[35%] w-full">
          <div className="relative h-100">
            <Image
              src={"/family.jpg"}
              height={320}
              width={280}
              alt="family"
              className="absolute top-5 h-96 left-32  rounded-tl-[40px] rounded-br-3xl"
            />
            <Image
              src={"/together.jpg"}
              height={10}
              width={210}
              alt="together"
              className="absolute h-64 top-52 left-8 z-10  rounded-tl-[40px] rounded-br-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
