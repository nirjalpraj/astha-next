import AppBar from "../components/AppBar";
import TopBar from "../components/TopBar";
import { bod } from "../data/members";

import Members from "../components/Members";

export default function Home() {
  return (
    <main>
      <TopBar />
      <AppBar />
      <Members data={bod} title={"Management Committee"} />
    </main>
  );
}
