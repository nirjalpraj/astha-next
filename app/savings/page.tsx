"use client";

import { Button } from "@material-tailwind/react";
import React from "react";

interface data {
  title: string;
  active: boolean;
}

const data: data[] = [
  {
    title: "Regular Savings",
    active: true,
  },
  {
    title: "General Savings",
    active: false,
  },
  {
    title: "Child Savings",
    active: false,
  },
  {
    title: "Fixed Deposit",
    active: false,
  },
];

const page = () => {
  return (
    <main>
      <div className="flex flex-row px-14  gap-4 my-5">
        <section className="basis-1/4 ">
          <div className="flex flex-col gap-2 py-7 sticky top-20 ">
            {data.map((item: data) => {
              return (
                <Button
                  placeholder={""}
                  className={`rounded-full w-52 ${
                    item.active
                      ? "bg-[#009B39]"
                      : "bg-gray-200 text-black font-light"
                  }`}
                  //   color={}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>
        </section>
        <section className="basis-3/4 ">
          <div className="flex flex-col bg">
            <h1 className="text-5xl font-bold text-[#0C164B]  my-6">
              Regular Savings
            </h1>

            <div className="flex flex-row">
              <span className="basis-1/2 ">
                <p className="uppercase text-[#009B39] font-bold text-lg ">
                  Interest Rate: 9% quaterly
                </p>
              </span>
              <span className="basis-1/2 flex justify-end ">
                <p className="uppercase text-[#009B39] font-bold text-lg">
                  Effective From: 2024-03-01
                </p>
              </span>
            </div>
            <img src="./savings.jpg" className="h-[40vh] w-full object-cover" />

            <p className="mt-7 text-[#444444]">
              This Saving Scheme is specially launched for the members who
              involved in business or have daily basis cash mobilizing
              transections . Though it is specially focused, other members could
              also enjoy this facility. This scheme help those member who
              extreme paucity of time, by our DOOR TO DOOR secure service.
              Premium savings accounts offer unmatched financial privileges and
              finest business solutions to ensure you always have an advantage
              over others.
            </p>
            <p className="text-[#444444] mt-3">
              The features of the product are as follows:-
              <li className="text-[#444444]">
                Account can be open with NPR 10,000.00 minimum balance
              </li>
              <li className="text-[#444444]">
                Interest rate: 9% (as per minimum balance) p.a. on daily basis.
              </li>
              <li className="text-[#444444]">
                Interest will be posted on quarterly basis.{" "}
              </li>
              <li className="text-[#444444]">
                Free issuance of withdrawal slips.
              </li>
              <li className="text-[#444444]">Free Mobile Karobar facility.</li>
              <li className="text-[#444444]">Free SMS alert facility.</li>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
