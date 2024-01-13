"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const NewsCard = () => {
  return (
    <div className="flex flex-col p-4 rounded-xl border h-max-[546px]">
      <img
        src="/news.png"
        alt="news or notice"
        className="rounded-md w-full h-64"
      />
      <div className="flex justify-between mt-2 mb-4">
        <h5 className="bg-[#EBF7EF] text-normal text-sm p-1 font-semibold rounded-md">
          News
        </h5>
        <h5 className="text-gray-800 text-sm">June 21, 2020</h5>
      </div>
      <h4 className="font-semibold text-xl">Cooperative Celebrated Day</h4>
      <p className="text-gray-800 text-sm">
        Today we’re releasing our first Responsible Business Practices Report,
        highlighting our efforts to maximize the positive impacts of our
        business on society and minimize negative impacts.
      </p>
      <div className="flex flex-row mt-5">
        <Button variant="outlined" color="green">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
