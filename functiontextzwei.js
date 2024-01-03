const keypress = document.getElementsByClassName("container");
const lober = document.getElementsByClassName("lober")[0];
var bark = new Audio("barkx2.wav");
var whistle = new Audio("whistle.wav");
var splat = new Audio("splat.wav");
var boing = new Audio("boing.wav");
var clown = new Audio("clown.wav");
var sneeze = new Audio("sneeze.wav");
var music = new Audio("IraqLobster.ogg");
document.addEventListener("keypress", (event) => {
  const keyName = event.key;
  if (keyName === "a") {
    bark.play();
  } else if (keyName === "s") {
    whistle.play();
  } else if (keyName === "d") {
    splat.play();
  } else if (keyName === "j") {
    boing.play();
  } else if (keyName === "k") {
    clown.play();
  } else if (keyName === "l") {
    sneeze.play();
  } else {
  }
});
document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "a") {
    bark.load();
  } else if (keyName === "s") {
    whistle.load();
  } else if (keyName === "d") {
    splat.load();
  } else if (keyName === "j") {
    boing.load();
  } else if (keyName === "k") {
    clown.load();
  } else if (keyName === "l") {
    sneeze.load();
  } else {
  }
});

function clearA() {
  lober.style.animation = "dance 0s infinite";
}
function lobsterm() {
  music.play();
  lober.style.animation = "dance 1s 26";
}
