var dark = false;
var jfk = 0;
export const Navbar = () => {
  return (
    <div
      className="flex flex-row justify-evenly xl:h-12 text-center dark:text-white dark:bg-black h-12 overflow-hidden"
      id="nav-over"
    >
      <div className="flex justify-center items-center">
        <pre className="whitespace-break-spaces">Rotten 🧠.</pre>
      </div>

      <div
        className="xl:flex xl:flex-row xl:gap-5 xl:opacity-100 xl:translate-x-[0px] translate-x-[1000px] flex flex-col overflow-hidden w-fit"
        id="nav-menu"
      >
        <button>Home.</button>
        <button>Source.</button>
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
