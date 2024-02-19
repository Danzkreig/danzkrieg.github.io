var lark = false;
export const NavBar = () => {
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
