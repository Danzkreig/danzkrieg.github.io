const container = document.getElementsByClassName("container")[0];
const ball = container.getElementsByClassName("ball")[0];

function ballCreation(count) {
  var width = document.body.clientWidth;
  for (i = 0; i < count; i++) {
    let ball = document.createElement("div");
    let random = Math.floor(Math.random() * width + 1);
    ball.classList.add("edible");
    ball.style.top = Math.floor(Math.random() * 50) + "px";
    ball.style.left = random + "px";
    container.appendChild(ball);
  }
}
var jet = 1;
ballCreation(jet);
function edibleMove() {
  var height = document.body.clientHeight;
  let edible = container.getElementsByClassName("edible");
  if (edible.length > 0) {
    for (i = 0; i < edible.length; i++) {
      edible[i].style.top = parseInt(edible[i].style.top) + 1 + "px";
      if (edible[i].style.top === height + "px") {
        edible[i].style.top = 0 + "px";
      }
    }
  } else {
    alert("Congratz. Round " + jet + " Completed.");
    jet++;
    ballCreation(jet);
  }
}
setInterval(edibleMove, 1);
function checkCollision(obj1, obj2) {
  const rect1 = obj1.getBoundingClientRect();
  const rect2 = obj2.getBoundingClientRect();
  return (
    rect1.x + rect1.width >= rect2.x &&
    rect1.x <= rect2.x + rect2.width &&
    rect1.y + rect1.height >= rect2.y &&
    rect1.y <= rect2.y + rect2.height
  );
  /*
  ball left + ball width >= edible left
  325px + 30px >= 325px true
  ball left <= edible left + edible width
  325px <= 325px + 10px true 
  ball top + ball height >= edible top
  325px + 30px <= 325px 
  ball top <= edible top + edible height
  */
}
onmousemove = (e) => {
  var ball = container.getElementsByClassName("ball")[0];
  let x = e.clientX;
  let y = e.clientY;
  function moveBall(x, y) {
    ball.style.top = y - 13 + "px";
    ball.style.left = x - 13 + "px";
  }
  moveBall(x, y);
  for (i = 0; i < container.getElementsByClassName("edible").length; i++) {
    if (
      checkCollision(ball, container.getElementsByClassName("edible")[i]) ===
      true
    ) {
      container.getElementsByClassName("edible")[i].remove();
    }
  }
};
