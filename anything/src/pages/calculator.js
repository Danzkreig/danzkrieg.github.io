import { addRequestMeta } from "next/dist/server/request-meta";
import styles from "../component/calculator.module.css";
import { calculate } from "@/component/test";
const db = [
  "C",
  "DEL",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
  "UNDO",
];
var num1 = 0;
var sign = "";
var num2 = 0;
var undotemp = "";
var undonum2 = 0;
var undonum1 = 0;
var undosign = "";
const button = () => {
  const result = [];
  db.forEach((thing) =>
    result.push(
      <button
        className={styles.button}
        onClick={() => {
          if (Number.isInteger(parseInt(thing)) === true && sign !== "") {
            undotemp = document.getElementById("dis").innerText;
            document.getElementById("dis").innerText += thing + " ";
            num2++;
          } else if (thing === "C") {
            document.getElementById("dis").innerText = "";
            num1 = 0;
            sign = "";
            num2 = 0;
          } else if (thing === "=") {
            undotemp = document.getElementById("dis").innerText;
            undonum1 = undotemp.split(" ")[0];
            undosign = sign;
            num1 = undotemp.split(" ")[0];
            let javier = undotemp.split(" ")[1];
            undonum2 = javier.match(/(\d+)/)[1];
            if (num2 > 0) {
              num2 = javier.match(/(\d+)/)[1];
            }
            if (num2 !== 0) {
              document.getElementById("dis").innerText = calculate(
                sign,
                num1,
                num2
              );
              sign = "";
              num2 = 0;
            }
          } else if (thing === "-" && sign === "") {
            undotemp = document.getElementById("dis").innerText;
            document.getElementById("dis").innerText += " - ";
            sign = "minus";
          } else if (thing === "+" && sign === "") {
            undotemp = document.getElementById("dis").innerText;
            document.getElementById("dis").innerText += " + ";
            sign = "plus";
          } else if (thing === "/" && sign === "") {
            undotemp = document.getElementById("dis").innerText;
            document.getElementById("dis").innerText += " / ";
            sign = "divide";
          } else if (thing === "X" && sign === "") {
            undotemp = document.getElementById("dis").innerText;
            document.getElementById("dis").innerText += " * ";
            sign = "times";
          } else if (thing === "%" && sign === "") {
            undotemp = document.getElementById("dis").innerText;
            document.getElementById("dis").innerText += " % ";
            sign = "percent";
          } else if (thing === "UNDO" && undotemp !== "") {
            document.getElementById("dis").innerHTML = undotemp;
            num2 = undonum2;
            num1 = undonum1;
            sign = undosign;
          } else if (thing === "DEL") {
            let h = document.getElementById("dis").innerText;
            document.getElementById("dis").innerText = h.slice(0, -1);
          } else if (Number.isInteger(parseInt(thing)) === true) {
            document.getElementById("dis").innerText += thing + " ";
            num1++;
          }
        }}
      >
        {thing}
      </button>
    )
  );
  return result;
};
export default function Tzeen() {
  return (
    <div className={styles.body}>
      <div className={styles.display}>
        <h4 id="dis"></h4>
      </div>
      <div className={styles.buttons}>{button()}</div>
    </div>
  );
}
