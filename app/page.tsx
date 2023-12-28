import Image from "next/image";
import TopBar from "./components/TopBar";
import AppBar from "./components/AppBar";
import CarouselImage from "./components/CarouselImage";
import MessageChairperson from "./components/MessageChairperson";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <TopBar />
      <AppBar />
      <AboutUs />
      <MessageChairperson />
      <Help />
    </main>
  );
}
