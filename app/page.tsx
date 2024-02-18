import Image from "next/image";
import TopBar from "./components/TopBar";
import AppBar from "./components/AppBar";
import CarouselImage from "./components/CarouselImage";
import MessageChairperson from "./components/MessageChairperson";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";
import MessageFounder from "./components/MessageFounder";
import CarouselComponent from "./components/CarouselComponent";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <main>
      <CarouselComponent />
      <AboutUs />
      <MessageChairperson />
      <MessageFounder />
      <Help />
      <ContactUs title="Contact Us" />
    </main>
  );
}
