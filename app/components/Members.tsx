import React from "react";
import { members } from "../data/members";

const Members = ({ data, title }: { data: members[]; title: string }) => {
  return (
    <div className="h-[100vh] w-full px-14 ">
      <div className="grid grid-rows  justify-items-center ">
        <h1 className="text-5xl font-bold text-[#0C164B] my-6">{title}</h1>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {data.map((item: members) => {
          return (
            <div className="flex flex-col rounded-xl">
              <img
                src={item.img}
                className="h-80 w-auto rounded-t-lg"
                alt="bod members"
              />
              <div className="flex flex-col bg-[#E6F5EB] p-2 rounded-b-lg">
                <h5 className="mx-auto text-normal text-lg font-semibold">
                  {item.name}
                </h5>
                <p className="mx-auto font-medium">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Members;
