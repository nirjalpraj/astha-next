import AppBar from "../components/AppBar/AppBar";
import TopBar from "../components/TopBar";
import { bod } from "../data/members";

import Members from "../components/Members";

export default function Home() {
  return (
    <main>
      <Members data={bod} title={"Management Committee"} />
    </main>
  );
}
