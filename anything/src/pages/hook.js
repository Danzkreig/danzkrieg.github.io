import { addRequestMeta } from "next/dist/server/request-meta";
import React, { useState, useEffect } from "react";
export default function boggle() {
  const [toggle, setToggle] = useState("OFF");
  function toggl() {
    if (toggle === "OFF") {
      setToggle((toggle) => (toggle = "ON"));
    } else {
      setToggle((toggle) => (toggle = "OFF"));
    }
  }
  const [counter, setCounter] = useState(0);
  function count(sym) {
    if (sym === "+") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }
  const db = [
    "Mark B. Cunningham",
    "Ruth J. Rideout",
    "Catherine D. Canchola",
    "Annette M. Breunig",
    "John Doe",
    "Jane Doe",
    "Igor The Russian",
    "Terror Billy",
    "Hans Würstsplecher",
  ];
  const [search, setSearch] = useState("");
  function sear() {
    setSearch((search) => (search = document.getElementById("lext").value));
    if (search !== "") {
      let result = db.filter((el) =>
        el.toLowerCase().includes(search.toLowerCase())
      );
      document.getElementById("poo").innerText = result;
    }
  }

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [status, setStatus] = useState("Working");
  const [generate, setGenerate] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (hours > 1) {
        clearInterval(interval);
        setStatus((status) => (status = "Time Limit has been reached"));
      } else if (minutes === 59) {
        setSeconds((seconds) => seconds + 1);
        setMinutes(minutes - 59);
        setHours(hours + 1);
      } else if (seconds === 59) {
        setSeconds((seconds) => seconds - 59);
        setMinutes(minutes + 1);
      } else {
        setSeconds((seconds) => seconds + 1);
        console.log(seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, hours, minutes, status, generate]);
  function timerStart() {
    setGenerate(!generate);
  }
  return (
    <div>
      <button onClick={() => toggl()} style={{ backgroundColor: "red" }}>
        {toggle}
      </button>
      <h1>{counter}</h1>
      <button onClick={() => count("+")}>+</button>
      <button onClick={() => count("-")}>-</button>
      <div>
        <input type="text" id="lext" />
        <button onClick={() => sear()}>Search</button>
      </div>
      <h4 id="poo"></h4>
      <div>
        <h2>
          {hours} Hours, {minutes} minutes, {seconds} seconds, {status}
        </h2>
        <button onClick={() => timerStart()}>Start</button>
      </div>
    </div>
  );
}
