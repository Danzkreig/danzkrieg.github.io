export const Navbar = () => {
  return (
    <div className="flex items-center w-screen h-8 justify-between mt-2 ml-10 xl:justify-around xl:ml-0">
      <h1 className="text-2xl">&lt;GG /&gt;</h1>
      <div>
        <button className="mr-3 hidden xl:inline">About</button>
        <button className="mr-3 hidden xl:inline">Work</button>
        <button className="mr-3 hidden xl:inline">Testimonials</button>
        <button className="mr-3 hidden xl:inline">Contact</button>
        <button id="dakr" className="mr-3 hidden xl:inline">
          ☼
        </button>
        <button className="p-1 bg-black text-white rounded-lg pr-3 pl-3 hidden xl:inline">
          Download CV
        </button>
        <button
          className="xl:hidden mr-10 text-3xl"
          onClick={() => {
            if ((isOpen = true)) {
              isOpen = false;
            } else {
              isOpen = true;
            }
          }}
        >
          ≡
        </button>
      </div>
      <div
        className="${
          isOpen ? translate-x-0 : -translate-x-full} ${
          isOpen ? hidden : hidden}"
      >
        <button className="mr-3 hidden xl:inline">About</button>
        <button className="mr-3 hidden xl:inline">Work</button>
        <button className="mr-3 hidden xl:inline">Testimonials</button>
        <button className="mr-3 hidden xl:inline">Contact</button>
        <button id="dakr" className="mr-3 hidden xl:inline">
          ☼
        </button>
        <button className="p-1 bg-black text-white rounded-lg pr-3 pl-3 hidden xl:inline">
          Download CV
        </button>
      </div>
    </div>
  );
};
