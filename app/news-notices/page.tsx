"use client";
import AppBar from "../components/AppBar";
import TopBar from "../components/TopBar";

import Members from "../components/Members";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import NewsCard from "../components/NewsCard";

export default function Home() {
  return (
    <main>
      <TopBar />
      <AppBar />
      <div className="flex flex-row px-14  gap-4 my-5">
        <section className="basis-1/4 ">
          <div className="flex flex-col gap-2 py-7 sticky top-20 ">
            <Button className="rounded-full w-52" color="green">
              All News and Notices
            </Button>
            <Button className="rounded-full w-24 bg-gray-200 text-black font-light">
              News
            </Button>
            <Button className="rounded-full w-24 bg-gray-200 text-black font-light">
              Notices
            </Button>
          </div>
        </section>
        <section className="basis-3/4 ">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-[#0C164B] mx-auto my-6">
              Our News and Notices
            </h1>
            <div className="grid grid-cols-2 gap-10">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
