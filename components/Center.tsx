import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";

const colors = [
  "from-blue-500",
  "from-red-500",
  "from-green-500",
  "from-yellow-500",
  "from-pink-500",
  "from-indigo-500",
  "from-purple-500",
];

export default function Center() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState("red");
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const playlistId = useRecoilValue(playlistIdState);

  useEffect(() => {
    const newColor = shuffle(colors).pop();
    setColor(newColor);
  }, [playlistId]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getPlaylist(playlistId).then(({ body }) => {
        setPlaylist(body);
      });
    }
  }, [spotifyApi, playlistId]);

  return (
    <div className=" flex-grow h-screen overflow-y-scroll">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
          onClick={signOut}
        >
          <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image}
            alt={session?.user?.name}
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5x font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>
      <section>
        <Songs />
      </section>
    </div>
  );
}
