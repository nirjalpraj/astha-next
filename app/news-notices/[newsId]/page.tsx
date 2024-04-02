"use client";

import AppBar from "@/app/components/AppBar/AppBar";
import Notice from "@/app/components/Notice";
import TopBar from "@/app/components/TopBar";

export default function Home() {
  return (
    <main>
      <TopBar />
      <AppBar />
      <div className=" flex mx-14 mt-5">
        <div className="basis-2/3 pr-8 text-justify ">
          <h5 className=" text-3xl font-medium mb-6">
            Cooperative Celebrated 100th International Day of Cooperatives in
            Nepal
          </h5>
          <div className="flex flex-row mb-3">
            <h5 className="bg-[#EBF7EF] text-normal text-sm p-1 font-semibold rounded-md">
              News
            </h5>

            <h5 className="text-gray-800 text-sm p-1 ml-2">June 21, 2020</h5>
          </div>
          <img src="/singlenews.png" className="w-full h-80 mb-5" />
          <p className="text-[#444444]">
            When running a startup, there are always urgent business priorities
            that need immediate attention. At the same time, failing to define
            values can lead to compounding culture debt and negatively impact
            every part of the company.
          </p>

          <p className="mt-5 text-[#444444]">
            The upper echelons of the art market cater to a club of global
            artists and collectors operating in a tightly networked ecosystem.
            If you aren’t part of this crowd, you don’t have much of a chance to
            get noticed as an artist. And, in many cases, high-end galleries
            won’t even let unestablished parties buy works at full price. Many
            would rather sell to a prominent collector they know personally.
          </p>
          <p className="mt-5 text-[#444444]">
            “The only reason I did it was to promote a subculture that was being
            overlooked, and that’s gone now,” Lazarides told The Art Newspaper.
            “It’s got to the stage where [the gallery world] is about nothing
            other than monetary value, and I just can’t work on those terms
            anymore.”
          </p>
          <p className="mt-5 text-[#444444]">
            Lazarides has seen from the inside what those outside the art world
            have suspected for decades. While some buyers within the upper
            echelon appreciate art for its intrinsic value, many of them see art
            more as a vehicle for investment. Wealthy investors buy and sell
            major works like a form of currency, and only they get to
            participate in the market.
          </p>
          <p className="mt-5 text-[#444444]">
            People intimidated by or priced out of the brick-and-mortar gallery
            world deserve a platform to buy and sell art as much as anyone.
            Where traditional galleries and auction houses have largely failed
            to meet that need, online galleries offer a welcoming marketplace
            for people who may not feel comfortable in traditional spaces. As a
            result, online galleries now offer the best opportunities for
            emerging artists to get their art noticed and connect with buyers
            who appreciate the work they make.
          </p>
        </div>
        <div className="basis-1/3 w-full  ">
          <div className="sticky top-20">
            <Notice />
          </div>
        </div>
      </div>
    </main>
  );
}
