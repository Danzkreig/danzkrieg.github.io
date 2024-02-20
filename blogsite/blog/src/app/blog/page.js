"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
export default function Blog() {
  const [article, SetArticles] = useState([]);
  const [pagenum, SetNum] = useState(12);
  var pianist = 1;
  async function getData() {
    const kfa = await fetch(
      "https://dev.to/api/articles?page=" +
        pianist.toString() +
        "&per_page=" +
        pagenum
    )
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  }
  useEffect(() => {
    getData();
  }, [pagenum]);
  return (
    <div className="flex justify-center flex-col items-center">
      <h1>All Blog Post</h1>
      <div className="grid justify-center items-center xl:grid-cols-3  gap-6 md:grid-cols-2 grid-cols-1">
        {article.map((article) => {
          return (
            <a href={"http://localhost:3000/single?id=" + article.id}>
              <div
                className="flex flex-col border-solid xl:h-[300px]  md:h-[200px] h-[150px] justify-center items-center overflow-scroll gap-3 shadow-sm hover:shadow-lg hover:cursor-pointer hover:transition-shadow duration-300"
                id={article.tags}
              >
                {article.cover_image && (
                  <Image
                    src={article.cover_image}
                    alt=""
                    height={300}
                    width={300}
                    className="xl:w-[300px]  md:w-[200px]  w-[100px]"
                  />
                )}
                <div className="flex flex-col xl:gap-5 ml-10 justify-center items-center">
                  <h1 className="text-sm md:text-base lg:text-xl">
                    {article.title}
                  </h1>
                  <h1 className="text-sm text-gray-500">
                    {article.description}
                  </h1>
                  <h3 className="text-xs text-gray-400">
                    {article.created_at.slice(0, 10)}
                  </h3>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <button
        className="p-1 border-2 border-gray-200 w-32 mt-6 mb-6 rounded"
        onClick={() => {
          SetNum((num) => (num += 3));
        }}
      >
        Load More
      </button>
    </div>
  );
}
