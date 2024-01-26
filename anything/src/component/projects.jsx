import Image from "next/image";
export const Project = ({ desc, title, img }) => {
  return (
    <div className="dark:text-white flex justify-center items-center flex-col mt-10 mb-10">
      <div className="text-transparent bg-clip-text bg-gradient-to-r dark:from-white dark:to-gray-300 from-black to-gray-800  ">
        My projects.
      </div>
      <div className="shadow-lg dark:shadow-gray-800 w-5/6 rounded-xl flex flex-col lg:flex-row lg:w-3/5 h-fit items-center">
        <Image src={img} width={400} height={400} />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">{title}</h1>
          <h1 className="text-md text-gray-700 dark:text-gray-300">{desc}</h1>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};
