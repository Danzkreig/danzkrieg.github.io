const play = document.getElementById("play")[0];
const stop = document.getElementById("stop")[0];
const pause = document.getElementById("pause")[0];
const load = document.getElementById("load")[0];
var music = new Audio("IraqLobster.ogg");
function playSound() {
  music.play();
}
function pauseSound() {
  music.pause();
}
function stopSound() {
  music.load();
}
function loadSound() {
  music.src = URL.createObjectURL(
    document.getElementById("soundinput").files[0]
  );
}
