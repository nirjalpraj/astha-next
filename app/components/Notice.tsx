import React from "react";
import { noticeHome, notice } from "../data/notice";

const Notice = () => {
  return (
    <div className="flex flex-col h-auto rounded-lg shadow-sm">
      <div className="h-14 w-full bg-[#E6F5EB] border-y rounded-t-lg ">
        <h2 className="text-normal font-semibold text-2xl p-2">Notice</h2>
      </div>
      {noticeHome.map((notice: notice, index: number) => {
        return (
          <div
            className={`flex flex-col p-2 gap-y-2 ${
              index === 1 ? `border-y-2` : `border-y-0`
            } `}
          >
            <div className="font-semibold text-base">{notice.title}</div>
            <div className="text-sm">{notice.date}</div>
            <div className="text-sm font-semibold scursor-pointer text-[#0C164B]">
              Read More {"->"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notice;
