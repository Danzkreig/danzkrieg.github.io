"use client";
import Image from "next/image";
import ImageWithFallback from "./components/fallbackImage";
import { useState, useEffect } from "react";
export default function Raskas() {
  const [article, SetArticles] = useState([]);
  const [filtered, SetFiltered] = useState(localStorage.getItem("filter"));
  const [pagenum, SetNum] = useState(9);
  var pianist = 1;
  async function getData() {
    const kfa = await fetch(
      "https://dev.to/api/articles?page=" +
        pianist.toString() +
        "&per_page=" +
        pagenum +
        "&tag=" +
        filtered
    )
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  }
  useEffect(() => {
    getData();
  }, [pagenum, filtered]);
  const [gallery, SetGallery] = useState([]);
  const [nextgal, SetGal] = useState(1);
  async function getBata() {
    const geschutz = await fetch(
      "https://dev.to/api/articles?page=" + nextgal + "&per_page=1"
    )
      .then((response) => response.json())
      .then((data) => SetGallery(data));
  }
  useEffect(() => {
    getBata();
  }, [nextgal]);
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          {gallery.map((article) => {
            return (
              <div className="">
                {article.cover_image && (
                  <ImageWithFallback
                    src={article.social_image}
                    alt=""
                    height={800}
                    width={800}
                    className="rounded-xl"
                  />
                )}
                <div className="bg-white w-96 h-32  z-3 relative rounded-lg bottom-[140px] left-3 justify-center flex flex-col">
                  <h1 className="relative left-6 mb-6  text-xl">
                    {article.title}
                  </h1>
                  <h1 className="relative left-6 text-sm text-gray-400">
                    {article.created_at}
                  </h1>
                </div>
                <div>
                  <button
                    className="mr-3 border-2 border-gray-300 w-8 h-8 rounded"
                    onClick={() => {
                      if (nextgal === 1) {
                        console.log("nope");
                      } else {
                        SetGal((gal) => (gal -= 1));
                      }
                    }}
                  >
                    &lt;
                  </button>
                  <button
                    className="ml-3 border-2 border-gray-300 w-8 h-8 rounded"
                    onClick={() => {
                      SetGal((gal) => (gal += 1));
                    }}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="w-screen mr-auto ml-auto xl:w-3/4"
        onLoad={() => {
          let fitler = localStorage.getItem("filter");

          if (fitler === "") {
            document.getElementById("all").classList.add("text-orange-300");
          } else if (fitler === "js") {
            document.getElementById("js").classList.add("text-orange-300");
          } else if (fitler === "ux") {
            document.getElementById("ux").classList.add("text-orange-300");
          } else if (fitler === "his") {
            document.getElementById("his").classList.add("text-orange-300");
          } else if (fitler === "css") {
            document.getElementById("css").classList.add("text-orange-300");
          }
        }}
      >
        <h1 className="text-2xl font-bold mt-6">All Blog Post.</h1>
        <div
          className="flex flex-row gap-3 mt-6"
          onClick={() => {
            let fitler = localStorage.getItem("filter");
            if (fitler === "") {
              document.getElementById("all").classList.add("text-orange-300");
              document.getElementById("ux").classList.remove("text-orange-300");
              document
                .getElementById("his")
                .classList.remove("text-orange-300");
              document
                .getElementById("css")
                .classList.remove("text-orange-300");
              document.getElementById("js").classList.remove("text-orange-300");
            } else if (fitler === "javascript") {
              document.getElementById("js").classList.add("text-orange-300");
              document.getElementById("ux").classList.remove("text-orange-300");
              document
                .getElementById("his")
                .classList.remove("text-orange-300");
              document
                .getElementById("css")
                .classList.remove("text-orange-300");
              document
                .getElementById("all")
                .classList.remove("text-orange-300");
            } else if (fitler === "ux") {
              document.getElementById("ux").classList.add("text-orange-300");
              document
                .getElementById("all")
                .classList.remove("text-orange-300");
              document
                .getElementById("his")
                .classList.remove("text-orange-300");
              document
                .getElementById("css")
                .classList.remove("text-orange-300");
              document.getElementById("js").classList.remove("text-orange-300");
            } else if (fitler === "history") {
              document.getElementById("his").classList.add("text-orange-300");
              document.getElementById("ux").classList.remove("text-orange-300");
              document
                .getElementById("all")
                .classList.remove("text-orange-300");
              document
                .getElementById("css")
                .classList.remove("text-orange-300");
              document.getElementById("js").classList.remove("text-orange-300");
            } else if (fitler === "css") {
              document.getElementById("css").classList.add("text-orange-300");
              document.getElementById("ux").classList.remove("text-orange-300");
              document
                .getElementById("his")
                .classList.remove("text-orange-300");
              document
                .getElementById("all")
                .classList.remove("text-orange-300");
              document.getElementById("js").classList.remove("text-orange-300");
            }
          }}
        >
          <a
            onClick={() => {
              SetFiltered("");
              localStorage.setItem("filter", "");
            }}
            id="all"
          >
            All
          </a>
          <a
            onClick={() => {
              SetFiltered("javascript");
              localStorage.setItem("filter", "javascript");
            }}
            id="js"
          >
            JS
          </a>
          <a
            onClick={() => {
              SetFiltered("ux");
              localStorage.setItem("filter", "ux");
            }}
            id="ux"
          >
            UX
          </a>
          <a
            onClick={() => {
              SetFiltered("history");
              localStorage.setItem("filter", "history");
            }}
            id="his"
          >
            History
          </a>
          <a
            onClick={() => {
              SetFiltered("css");
              localStorage.setItem("filter", "css");
            }}
            id="css"
          >
            CSS
          </a>
        </div>
        <div className="grid justify-center items-center xl:grid-cols-3  gap-6 md:grid-cols-2 grid-cols-1">
          {article.map((article) => {
            return (
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
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <button
            onClick={() => {
              SetNum((num) => (num += 3));
            }}
            className="shadow-sm from-gray-100 to-gray-600 to pt-1 pb-1 pr-2 pl-2 rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
