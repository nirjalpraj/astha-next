"use client";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const TopBar = () => {
  return (
    <div className="flex h-10 w-full bg-normal ">
      <div className="flex flex-row mx-14 gap-x-4 items-center">
        <div className="w-fit">
          <FacebookRoundedIcon className="fill-white" />
        </div>
        <div className="w-fit">
          <InstagramIcon className="fill-white" />
        </div>
        <div className="w-fit fill-white ">
          <TwitterIcon className="fill-white" />
        </div>
      </div>
      <div className="flex flex-row ml-auto   items-center gap-x-4 mr-14 ">
        <div className="vl" />

        <span className="text-white text-xs px-1  ">
          <MailOutlineIcon /> astha.saccos@gmail.com
        </span>
        <div className="vl" />
        <span className="text-white text-xs px-1">
          <LocalPhoneOutlinedIcon /> 01-6616904
        </span>
        <div className="vl" />
      </div>
    </div>
  );
};

export default TopBar;
