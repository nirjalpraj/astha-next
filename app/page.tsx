import Image from "next/image";
import TopBar from "./components/TopBar";
import AppBar from "./components/AppBar";
import CarouselImage from "./components/CarouselImage";
import MessageChairperson from "./components/MessageChairperson";
import Help from "./components/Help";

export default function Home() {
  return (
    <main>
      <TopBar />
      <AppBar />
      <MessageChairperson />
      <Help />
    </main>
  );
}
