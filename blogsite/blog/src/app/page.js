"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Raskas() {
  const [article, SetArticles] = useState([]);
  const [pagenum, SetNum] = useState(9);
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
  });

  return (
    <div>
      <h1 className="text-center text-3xl">All Blog Post.</h1>
      <div className="flex flex-row gap-3 ml-8">
        <a
          onClick={() => {
            localStorage.setItem("select", "all");
            document
              .getElementById(localStorage.getItem("select"))
              .classList.toggle("text-red-500");
          }}
          id="all"
        >
          All
        </a>
        <a
          onClick={() => {
            localStorage.setItem("select", "design");
            document
              .getElementById(localStorage.getItem("select"))
              .classList.toggle("text-red-500");
          }}
          id="design"
        >
          Design
        </a>
        <a
          onClick={() => {
            localStorage.setItem("select", "travel");
            document
              .getElementById(localStorage.getItem("select"))
              .classList.toggle("text-red-500");
          }}
          id="travel"
        >
          Travel
        </a>
        <a
          onClick={() => {
            localStorage.setItem("select", "fashion");
            document
              .getElementById(localStorage.getItem("select"))
              .classList.toggle("text-red-500");
          }}
          id="fashion"
        >
          Fashion
        </a>
        <a
          onClick={() => {
            localStorage.setItem("select", "tech");
            document
              .getElementById(localStorage.getItem("select"))
              .classList.toggle("text-red-500");
          }}
          id="tech"
        >
          Technology
        </a>
        <a
          onClick={() => {
            localStorage.setItem("select", "brand");
            document
              .getElementById(localStorage.getItem("select"))
              .classList.toggle("text-red-500");
          }}
          id="brand"
        >
          Branding
        </a>
      </div>
      <div className="grid justify-center items-center grid-cols-3 m-10 gap-6">
        {article.map((article) => {
          return (
            <div className="flex flex-col border-solid border-red-600 border-2 h-[300px] justify-center items-center overflow-scroll gap-3">
              <Image src="/favicon.ico" height={100} width={100}></Image>
              <div className="flex flex-col gap-5 ml-10 justify-center items-center">
                {article.title}
                <h1 className="text-sm text-gray-500">{article.description}</h1>
                <h3 className="text-xs text-gray-400">
                  {article.created_at.slice(0, 10)}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          SetNum((num) => (num += 3));
        }}
      >
        Load More
      </button>
    </div>
  );
}
