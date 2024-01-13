import React from "react";
import { gallery } from "../data/gallery";

const GalleryCover = ({ galleryCover }: { galleryCover: gallery }) => {
  return (
    <div className="flex flex-col">
      <img src={galleryCover.img} className="w-96 h-auto" />
      <h5 className="font-semibold mt-2">{galleryCover.title}</h5>
    </div>
  );
};

export default GalleryCover;
