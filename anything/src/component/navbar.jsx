import React, { useState, useEffect } from "react";
var lark = false;
var jfk = 0;
export const Navbar = ({ title }) => {
  const deacon = title.split("");
  if (typeof window !== "undefined") {
    lark = localStorage.getItem("darkMode");
    console.log(lark);
    if (lark === "true") {
      document.documentElement.classList.add("dark");
      console.log(lark);
    } else {
      document.documentElement.classList.add("white");
      console.log(lark);
    }
  }
  return (
    <div
      className="flex flex-row justify-center gap-24 xl:h-12 text-center dark:text-white dark:bg-black h-12 overflow-hidden xl:ml-24 ml-4 mr-4"
      id="nav-over"
    >
      <div className="flex justify-center items-center">
        <pre className="whitespace-break-spaces">
          Rotten <span className="animate-pulse">🧠</span>.
        </pre>
      </div>
      <div
        className="xl:flex xl:flex-row xl:gap-5 xl:opacity-100 xl:translate-x-[0px] translate-x-[1000px] flex flex-col overflow-hidden w-fit"
        id="nav-menu"
      >
        <button>Home.</button>
        <button>Source.</button>
        <button
          onClick={() => {
            if (lark === "true") {
              console.log("lark was true");
              console.log(lark);
              localStorage.setItem("darkMode", "false");
              document.documentElement.classList.replace("dark", "white");
              lark = "false";
            } else {
              console.log("lark was false ");
              console.log(lark);
              localStorage.setItem("darkMode", "true");
              document.documentElement.classList.replace("white", "dark");
              lark = "true";
            }
          }}
        >
          Dark Mode.
        </button>
        <button>Download CV</button>
      </div>
      <button
        className="mr-[10px] xl:opacity-0"
        onClick={() => {
          if (jfk === 0) {
            document
              .getElementById("nav-menu")
              .classList.remove("translate-x-[1000px]");
            document.getElementById("nav-over").classList.add("h-fit");
            jfk++;
          } else {
            document
              .getElementById("nav-menu")
              .classList.add("translate-x-[1000px]");
            document.getElementById("nav-over").classList.remove("h-fit");

            jfk--;
          }
        }}
      >
        ≡
      </button>
    </div>
  );
};
