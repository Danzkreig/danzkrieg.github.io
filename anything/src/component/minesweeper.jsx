var actual = 0;
export const Grid = () => {
  var tempcols = "grid-cols-[1]";
  var temprows = "grid-rows-[1]";
  return (
    <div>
      <div className="grid grid-rows-[1] grid-cols-[1]" id="grid"></div>
      <input
        inputMode="decimal"
        placeholder="Enter number of columns"
        id="cols"
      ></input>
      <input
        inputMode="decimal"
        placeholder="Enter number of rows"
        id="rows"
      ></input>
      <button
        onClick={() => {
          let grid = document.getElementById("grid");
          let cols = document.getElementById("cols").value;
          let rows = document.getElementById("rows").value;
          let boxes = cols * rows;
          do {
            let mario = document.createElement("div");
            mario.classList.add("w-24");
            mario.classList.add("h-24");
            mario.classList.add("bg-black");
            actual++;
            console.log(boxes);
            grid.append(mario);
          } while (actual < boxes);
          grid.classList.remove(tempcols);
          grid.classList.remove(temprows);
          tempcols = "grid-cols-" + cols;
          temprows = "grid-rows-" + rows;
          grid.classList.add("grid-cols-" + cols);
          grid.classList.add("grid-rows-" + rows);
        }}
      >
        &lt; /ss&gt;
      </button>
    </div>
  );
};
