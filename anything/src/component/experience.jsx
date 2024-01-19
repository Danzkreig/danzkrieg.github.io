import Image from "next/image";

const db = [
  {
    comLogo: "/Hydra.png",
    title: "Öberkømmandant",
    experience: "Lorem Ipsum Delorem Gestrutius",
    fromTo: "Jul 1939 - Jan 1945",
  },
  {
    comLogo: "/Hydra.png",
    title: "Öberkømmandant",
    experience: "Lorem Ipsum Delorem Gestrutius",
    fromTo: "Jul 1939 - Jan 1945",
  },
  {
    comLogo: "/Hydra.png",
    title: "Öberkømmandant",
    experience: "Lorem Ipsum Delorem Gestrutius",
    fromTo: "Jul 1939 - Jan 1945",
  },
];

export const Jfk = () => {
  let jz = [];
  db.forEach((el) => {
    jz.push(
      <div className="flex flex-row justify-between min-w-[1000px] min-h-[300px] shadow-xl rounded">
        <Image
          src={el.comLogo}
          width={150}
          height={150}
          className="object-contain mb-auto mt-10 ml-10"
        />
        <div className="flex flex-col gap-5  mt-10">
          <h1>{el.title}</h1>
          <h4>{el.experience}</h4>
        </div>
        <h3 className="text-xl  mt-10 mr-10">{el.fromTo}</h3>
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-10 mb-32">
      <div className="flex place-content-center flex-col ml-auto mr-auto">
        <h1 className="bg-gray-200 w-24 text-center rounded">Experience</h1>
        <h3>Work and no play makes Jack a dull boy.</h3>
      </div>
      <div className="flex flex-col ml-auto mr-auto gap-20">{jz}</div>
    </div>
  );
};
