function timer() {
  var systemdate = new Date();
  document.getElementById("clock").innerHTML = systemdate.toLocaleTimeString();
}
setInterval(timer, 4000);
