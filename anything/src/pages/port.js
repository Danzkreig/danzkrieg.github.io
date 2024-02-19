import { addRequestMeta } from "next/dist/server/request-meta";
import { NavBar } from "@/old/nav";
import { Profile } from "@/old/profile";
import { About } from "@/old/about";
import { Skills } from "@/old/skills";
import { Jfk } from "@/old/experience";
import { Proj } from "@/old/project";
import { Contact } from "@/old/Kontakt";
import { Made } from "@/old/madewith";
export default function radon() {
  return (
    <div className="dark:bg-black">
      <NavBar />
      <Profile />
      <About />
      <Skills />
      <Jfk />
      <Proj
        projectName={"Skrilla"}
        projectAbout={
          "Skirlla is a multifunctional app designed to help investment bankers create small summaries of their returns and sums"
        }
        projectTags={["Investment", "Banking", "Multifunctional", "Fun"]}
        projectImg={"/demon.jpeg"}
        projectLink={"https://youtube.com"}
      />
      <Proj
        projectName={"Nuklear"}
        projectAbout={"Nukes Nukes Nukes"}
        projectTags={["Investment", "Banking", "Multifunctional", "Fun"]}
        projectImg={"/demon.jpeg"}
        projectLink={"https://youtube.com"}
      />
      <Contact Email={"festeringwound@proton.me"} Phone={"77777777"} />
      <Made />
    </div>
  );
}
