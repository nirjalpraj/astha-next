import React from "react";
import TopBar from "../components/TopBar";
import AppBar from "../components/AppBar";
import OurVision from "./components/OurVision";
import Planning from "./components/Planning";
import OurMission from "./components/OurMission";

const About = () => {
  return (
    <main>
      <TopBar />
      <AppBar />
      <div className="w-full h-[55vh]  bg-gradient-to-br from-[#00D14E] from-0% via-[#009B39] via-70% to-[#00D14E99] to-2%">
        <div className="grid grid-cols-1 h-full content-center justify-items-center gap-y-2">
          <h1 className="text-5xl font-medium text-white">
            "Empowering Communities,
          </h1>
          <h1 className="text-5xl font-medium text-white">
            {" "}
            Enriching Lives: Your Cooperative
          </h1>
          <h1 className="text-5xl font-medium text-white">Community Bank."</h1>
        </div>
      </div>
      <OurVision />
      <OurMission />
      <Planning />
    </main>
  );
};

export default About;
