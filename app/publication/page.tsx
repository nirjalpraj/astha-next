"use client";

import { Button } from "@material-tailwind/react";
import React from "react";
import ReportRow from "../components/ReportRow";

const data = [
  "Aastha Annual Report 2079-80",
  "Aastha Annual Report 2078-79",
  "Aastha Annual Report 2077-78",
  "Aastha Annual Report 2076-77",
];

const page = () => {
  return (
    <main>
      <div className="flex flex-row px-14  gap-4 my-5">
        <section className="basis-1/4 ">
          <div className="flex flex-col gap-2 py-7 sticky top-20 ">
            <Button
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              placeholder={""}
              className="rounded-full w-52"
              color="green"
            >
              Annual Reports
            </Button>
            <Button
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              placeholder={""}
              className="rounded-full w-52  bg-gray-200 text-black font-light"
            >
              Monthly Reports
            </Button>
          </div>
        </section>
        <section className="basis-3/4 ">
          <div className="flex flex-col bg">
            <h1 className="text-5xl font-bold text-[#0C164B] mx-auto my-6">
              Annual Reports
            </h1>
            <div className="p-2">
              {data.map((item: string) => {
                return <ReportRow title={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
