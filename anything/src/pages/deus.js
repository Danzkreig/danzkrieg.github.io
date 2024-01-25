import { Navbar } from "@/component/navbar";
import { Intro } from "@/component/intro";
import { Info } from "@/component/Info";
import { Contact } from "@/component/ContactInfo";
import { Projects } from "@/component/projects";
export default function fart() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <Intro />
      <Info />
      <Projects />
      <Contact />
    </div>
  );
}
