export const NavBar = () => {
  return (
    <div className="flex mt-2">
      <div className="text-5xl ml-60">𓂀</div>
      <div
        className="flex gap-10 ml-auto
      mr-20 mt-3 mb-20"
      >
        <button>Feel</button>
        <button>Control</button>
        <button>Arbitrate</button>
        <button>Kopfwäsche</button>
        <button>⏿</button>
        <button className="rounded-lg border-red-500 bg-red-500 h-8 w-44 ">
          <h3 className="font-outline-2 text-white text-1xl font-black">
            Drink The Kool-Aid
          </h3>
        </button>
      </div>
    </div>
  );
};
