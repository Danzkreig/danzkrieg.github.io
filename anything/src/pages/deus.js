import { Navbar } from "@/old/navbar";
import { Intro } from "@/old/intro";
import { Info } from "@/old/Info";
import { Contact } from "@/old/ContactInfo";
import { Project } from "@/old/projects";
import Head from "next/head";
export default function fart() {
  return (
    <div className="dark:bg-black w-screen">
      <Head>
        <title id="title"></title>
      </Head>
      <Navbar title="Rotten" />
      <Intro />
      <Info />
      <Project
        desc="Labore deserunt minim exercitation nisi. Proident irure ea in sint
            duis nulla anim id pariatur nulla esse ut adipisicing ad.
            Consectetur est adipisicing cillum veniam reprehenderit excepteur
            aliquip. Tempor enim adipisicing labore exercitation tempor laborum
            voluptate. Est ut laboris occaecat aliqua nostrud Lorem sit dolore. sd"
        title="Elit occaecat cupidatat ipsum dolore cillum cillum sit."
        img="/skull.png"
      />
      <Contact />
    </div>
  );
}
