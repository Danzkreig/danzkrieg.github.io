import Image from "next/image";
const tagTest = (tags) => {
  const jfk = [];
  tags.forEach((el) => {
    jfk.push(
      <div className="flex place-content-center">
        <h1 className="bg-gray-200 w-fit p-1 pr-2 pl-2   text-center rounded">
          {el}
        </h1>
      </div>
    );
  });
  return jfk;
};
export function Proj({
  projectName,
  projectAbout,
  projectTags,
  projectImg,
  projectLink,
}) {
  return (
    <div className="flex flex-row, gap-24 w-4/6  ml-auto  shadow-xl border-black border-0.5px mr-auto rounded-xl mb-24 dark:bg-black dark:shadow-slate-500">
      <div className=" bg-gray-100 rounded-xl w-[500px] h-[500px] flex justify-center items-center dark:bg-gray-900">
        <Image
          src={projectImg}
          width={400}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl dark:text-white">{projectName}</h3>
        <p classname="text-xl dark:text-white">{projectAbout}</p>
        <div className="flex  flex-row gap-5 dark:invert">
          {tagTest(projectTags)}
        </div>
        <a href={projectLink}>⤷</a>
      </div>
    </div>
  );
}
