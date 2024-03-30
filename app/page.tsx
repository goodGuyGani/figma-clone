"use client"
import Live from "@/components/Live";
import { Room } from "./Room";


export default function Page() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center text-center">
      <h1 className="font-2xl text-white">Liveblocks Figma Clone</h1>
      <Live />
    </div>
  );
}
