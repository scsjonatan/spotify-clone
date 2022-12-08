import type { NextPage } from "next";

import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return session ? (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  ) : null;
};

export default Home;
