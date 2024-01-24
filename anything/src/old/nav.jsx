var dark = false;
export const NavBar = () => {
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
          onClick={() => {
            let root = document.documentElement;
            if (typeof window !== "undefined") {
              if (dark === true) {
                root.setAttribute("class", "white");
                dark = false;
                console.log("dark is no more");
              } else {
                root.setAttribute("class", "dark");
                dark = true;
                console.log("dark enabled");
              }
            }
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
