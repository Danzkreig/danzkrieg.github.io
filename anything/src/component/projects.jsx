import Image from "next/image";
export const Projects = () => {
  return (
    <div className="dark:text-white flex justify-center items-center flex-col mt-10 mb-10">
      <div className="p-1 bg-gray-100 dark:bg-gray-200 dark:text-black w-fit rounded-lg shadow-xl border-black">
        My projects.
      </div>
      <div className="shadow-lg dark:shadow-gray-800 w-5/6 rounded-xl flex flex-col lg:flex-row lg:w-3/5 h-fit items-center">
        <Image src="/skull.png" width={400} height={400} />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">To-Do Site</h1>
          <h1 className="text-md text-gray-700 dark:text-gray-300">
            I am still learning but I have made a To-Do site, Like every other
            front end web dev. But I'm doing something a bit different with this
            sweet but short CV.
          </h1>
          <h1> </h1>
        </div>
      </div>
    </div>
  );
};
