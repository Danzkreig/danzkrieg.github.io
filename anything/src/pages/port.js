import { addRequestMeta } from "next/dist/server/request-meta";
import { NavBar } from "@/component/nav";
import { Profile } from "@/component/profile";
import Image from "next/image";
import { About } from "@/component/about";
import { Skills } from "@/component/skills";
import { Jfk } from "@/component/experience";
export default function radon() {
  return (
    <div>
      <NavBar />
      <Profile />
      <About />
      <Skills />
      <Jfk />
    </div>
  );
}
