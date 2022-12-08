import type { NextPage } from "next";

import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
import Songs from "../components/Songs";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return session ? (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  ) : null;
};

export default Home;
