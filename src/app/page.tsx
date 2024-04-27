import Repo from "../components/repo/Repo/Repo";
import { useUserStore } from "../store/userStore";
import { cookies } from "next/headers";
import { SERVER_URL } from "../config/collections";
import axios from 'axios'

export default function Home() {
  
  return (
    <main className="px-10  min-h-[calc(100vh-64px)] flex gap-3 text-white">
      <div className=" w-[20rem] bg-[#0D1117]">
      </div>
      <div className="w-[100%] h-fit grid gap-3 grid-flow-row grid-cols-2 grid-rows-5 ">
        <Repo />
        <Repo />
        <Repo />
      </div>
    </main>
  );
}
