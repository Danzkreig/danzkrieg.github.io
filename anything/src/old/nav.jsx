import { useEffect, useState } from "react";
var dark = false;
export const NavBar = () => {
  const [DarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("dark") === false) {
      localStorage.setItem("dark", true);
      root.setAttribute("class", "white");
      console.log("fuck");
      DarkMode = true;
    } else {
      localStorage.setItem("dark", false);
      root.setAttribute("class", "dark");
      DarkMode = false;
    }
  });
  return (
    <div className="flex mt-2 dark:bg-black">
      <div className="text-5xl ml-60 dark:text-white">𓂀</div>
      <div
        className="flex gap-10 ml-auto
      mr-20 mt-3 mb-20"
      >
        <button className="dark:text-white">Feel</button>
        <button className="dark:text-white">Control</button>
        <button className="dark:text-white">Arbitrate</button>
        <button className="dark:text-white">Kopfwäsche</button>
        <button
          onLoad={() => console.log("Working")}
          onClick={() => {
            setDarkMode();
          }}
          className="dark:text-white"
        >
          ⏿
        </button>
        <button className="rounded-lg border-red-500 bg-red-500 h-8 w-44 dark:invert">
          <h3 className="font-outline-2 text-white text-1xl font-black">
            Drink The Kool-Aid
          </h3>
        </button>
      </div>
    </div>
  );
};
