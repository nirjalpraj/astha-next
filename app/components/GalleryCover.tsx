import React from "react";
import { gallery } from "../data/gallery";
import Link from "next/link";

const GalleryCover = ({ galleryCover }: { galleryCover: gallery }) => {
  return (
    <div className="flex flex-col">
      <img src={galleryCover.img} className="w-96 h-auto" />
      <Link href={`/gallery/${galleryCover.title}`}>
        <h5 className="font-semibold mt-2">{galleryCover.title}</h5>
      </Link>
    </div>
  );
};

export default GalleryCover;
