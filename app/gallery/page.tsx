"use client";
import AppBar from "../components/AppBar/AppBar";
import TopBar from "../components/TopBar";

import Members from "../components/Members";
import Image from "next/image";
import { Button, Checkbox, Option, Select } from "@material-tailwind/react";
import NewsCard from "../components/NewsCard";
import { photoGallery, gallery } from "../data/gallery";
import GalleryCover from "../components/GalleryCover";

export default function Home() {
  const years: string[] = [
    "2080",
    "2079",
    "2078",
    "2077",
    "2076",
    "2075",
    "2074",
    "2073",
    "2072",
    "2071",
    "2070",
  ];
  return (
    <main>
      <div className="flex flex-row px-14  gap-4 my-5">
        <section className="basis-1/6  ">
          <div className="flex flex-col gap-2 ">
            <h5 className="font-semibold">Filter by Year</h5>
            <Select placeholder={""} label="Select Year" color="green">
              {years.map((year: string) => {
                return <Option>{year}</Option>;
              })}
            </Select>
          </div>
        </section>
        <section className="basis-5/6 ">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-[#0C164B] mx-auto my-6">
              Photo Gallery
            </h1>
            <div className="grid grid-cols-3 gap-10">
              {photoGallery.map((item: gallery) => {
                return <GalleryCover galleryCover={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
