import { addRequestMeta } from "next/dist/server/request-meta";
import Image from "next/image";
const skills = [
  { name: "Schitzophrenia", icon: "/SS.png" },
  { name: "Retardism", icon: "/SS.png" },
  { name: "Autism", icon: "/SS.png" },
  { name: "Psychotic", icon: "/SS.png" },
  { name: "Neurotic", icon: "/SS.png" },
  { name: "Bipolar", icon: "/SS.png" },
  { name: "Unfettered Rage", icon: "/SS.png" },
  { name: "Chudism", icon: "/SS.png" },
  { name: "Shit", icon: "/SS.png" },
  { name: "Racist", icon: "/SS.png" },
  { name: "Homophobic", icon: "/SS.png" },
  { name: "Transphobic", icon: "/SS.png" },
  { name: "Bigot", icon: "/SS.png" },
  { name: "Tsarist", icon: "/SS.png" },
  { name: "Bulgarian", icon: "/SS.png" },
  { name: "Narcoleptic", icon: "/SS.png" },
];
export const Skills = () => {
  let fuck = [];
  skills.forEach((el) =>
    fuck.push(
      <div className="flex flex-col place-self-center">
        <Image src={el.icon} width={100} height={100} />
        <h3 className="place-self-center">{el.name}</h3>
      </div>
    )
  );
  return (
    <div className="flex flex-col mr-52 ml-52 mt-10 gap-3 mb-52">
      <div className="flex place-content-center">
        <h1 className="bg-gray-200 w-24 text-center rounded">About Me</h1>
      </div>
      <div className="text-center">Fuck, Fuck, Fuck, Fuck.</div>
      <div className="grid grid-cols-8">{fuck}</div>
    </div>
  );
};
