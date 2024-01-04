// defining dom elements
const counter = document.getElementsByClassName("counter");
const bigboy = document.getElementsByClassName("bigboy");
const addcard = document.getElementsByClassName("addcard");
const backdrop = document.getElementById("backdrop");
var music = new Audio("IraqLobster.ogg");
const title = document.getElementById("title");
const todo = document.getElementsByClassName("todo");
const desc = document.getElementById("description");
const progress = document.getElementById("status");
const priority = document.getElementById("priority");
const submit = document.getElementById("submit");
// makes add card buttons work to show the task creation form
for (var i = 0; i < addcard.length; i++) {
  addcard[i].addEventListener("click", () => {
    backdrop.classList.add("ontop");
  });
}
function changePriority(prio) {
  if (prio === 0) {
    document
      .getElementById("status")
      .getElementsByTagName("option")[0].selected = true;
  } else if (prio === 1) {
    document
      .getElementById("status")
      .getElementsByTagName("option")[1].selected = true;
  } else if (prio === 2) {
    document
      .getElementById("status")
      .getElementsByTagName("option")[2].selected = true;
  } else if (prio === 3) {
    document
      .getElementById("status")
      .getElementsByTagName("option")[3].selected = true;
  }
}
//uid is literally just an incrimental number
var uid = 1;
// delete button function
function farter(id) {
  target = document.getElementById(id);
  target.remove("");
  for (i = 0; i < 4; i++) {
    let elementcounter = bigboy[i].children.length;
    counter[i].innerHTML = elementcounter - 1;
  }
}
// done button function
function doner(id) {
  let done = document.getElementById("done");
  doneparent = done.parentNode;
  target = document.getElementById(id);
  doneparent.insertBefore(target, done);
  for (i = 0; i < 4; i++) {
    let elementcounter = bigboy[i].children.length;
    counter[i].innerHTML = elementcounter - 1;
  }
}
//edit button function
function edit(id) {
  target = document.getElementById(id);
  target
    .getElementsByClassName("text")[0]
    .getElementsByClassName("titler")[0]
    .setAttribute("contenteditable", "true");
  target
    .getElementsByClassName("text")[0]
    .getElementsByClassName("description")[0]
    .setAttribute("contenteditable", "true");
  target
    .getElementsByClassName("buttonlist")[0]
    .getElementsByClassName("edit")[0]
    .classList.add("hidden");
  target
    .getElementsByClassName("buttonlist")[0]
    .getElementsByClassName("unedit")[0]
    .classList.remove("hidden");
  target
    .getElementsByClassName("priorityel")[0]
    .classList.add("dropdownEnabled");
}
// disable edit
function disableEdit(id) {
  target = document.getElementById(id);
  target
    .getElementsByClassName("text")[0]
    .getElementsByClassName("titler")[0]
    .setAttribute("contenteditable", "false");
  target
    .getElementsByClassName("text")[0]
    .getElementsByClassName("description")[0]
    .setAttribute("contenteditable", "false");
  target
    .getElementsByClassName("buttonlist")[0]
    .getElementsByClassName("edit")[0]
    .classList.remove("hidden");
  target
    .getElementsByClassName("buttonlist")[0]
    .getElementsByClassName("unedit")[0]
    .classList.add("hidden");
  target
    .getElementsByClassName("priorityel")[0]
    .classList.remove("dropdownEnabled");
}
// dropdown checks for if edit is enabled;
function drdown(id) {
  vinuz = document.getElementById(id);
  if (
    vinuz
      .getElementsByClassName("buttonlist")[0]
      .getElementsByClassName("edit")[0]
      .classList.contains("hidden") == true
  ) {
    vinuz.getElementsByClassName("priorityel")[0];
    let dropdown = document.createElement("div");
    let low = document.createElement("button");
    let medium = document.createElement("button");
    let high = document.createElement("button");
    low.setAttribute("value", "low");
    medium.setAttribute("value", "medium");
    high.setAttribute("value", "high");
    low.setAttribute("onclick", "changeParentText()");
    medium.setAttribute("onclick", "changeParentText()");
    high.setAttribute("onclick", "changeParentText()");
    low.classList.add("fya");
    medium.classList.add("fya");
    high.classList.add("fya");
    low.innerHTML = "low";
    medium.innerHTML = "medium";
    high.innerHTML = "high";
    dropdown.classList.add("dropdown");
    dropdown.appendChild(low);
    dropdown.appendChild(medium);
    dropdown.appendChild(high);
    let parent = vinuz.getElementsByClassName("priorityel")[0];
    parent.appendChild(dropdown);
  }
}
function dropdowndel(id) {
  vinuz = document.getElementById(id);
  console.log(vinuz);
  vinuz
    .getElementsByClassName("dropdownEnabled")[0]
    .getElementsByClassName("dropdown")[0]
    .remove();
}
// change parent content
function changeParentText() {
  let parent = event.target.parentNode.parentNode;
  something = event.target.value;
  parent.textContent = something;
}
// close form if clicked outside of bounding box
document.addEventListener("click", (event) => {
  if (
    event.target === backdrop ||
    event.target.classList.contains("close-modal")
  ) {
    backdrop.classList.remove("ontop");
  }
});

// used the form data to create task
submit.addEventListener("click", (event) => {
  let todo = document.getElementById("todo");
  let stuck = document.getElementById("stuck");
  let done = document.getElementById("done");
  let progressid = document.getElementById("progressid");
  let parentDiv = todo.parentNode;
  let task = document.createElement("div");
  let fart = document.createElement("button");
  let titleel = document.createElement("h4");
  let donebutton = document.createElement("button");
  let editbutton = document.createElement("button");
  let disablebutton = document.createElement("button");
  let buttons = document.createElement("div");
  let text = document.createElement("div");
  editbutton.classList.add("edit");
  editbutton.setAttribute("onclick", "edit(" + uid + ")");
  editbutton.innerHTML = "E";
  disablebutton.classList.add("unedit");
  disablebutton.classList.add("hidden");
  disablebutton.setAttribute("onclick", "disableEdit(" + uid + ")");
  disablebutton.innerHTML = "D";
  buttons.classList.add("buttonlist");
  text.classList.add("text");
  donebutton.innerHTML = "✓";
  let priorityel = document.createElement("div");
  let descel = document.createElement("p");
  let farttext = document.createTextNode("X");
  donebutton.setAttribute("onclick", "doner(" + uid + ")");
  task.classList.add("taskcontainer");
  task.setAttribute("draggable", "true");
  fart.setAttribute("onclick", "farter(" + uid + ")");
  task.setAttribute("ondragstart", "drag(event)");
  task.id = uid;
  let taskname = document.createTextNode(title.value);
  let taskdesc = document.createTextNode(desc.value);
  let taskpriority = document.createTextNode(priority.value);
  priorityel.classList.add("priorityel");
  donebutton.classList.add("button");
  fart.classList.add("button");
  fart.appendChild(farttext);
  priorityel.appendChild(taskpriority);
  priorityel.setAttribute("onmouseenter", "drdown(" + uid + ")");
  priorityel.setAttribute("onmouseleave", "dropdowndel(" + uid + ")");
  descel.appendChild(taskdesc);
  titleel.appendChild(taskname);
  descel.classList.add("description");
  titleel.classList.add("titler");
  text.appendChild(titleel);
  text.appendChild(descel);
  text.appendChild(priorityel);
  buttons.appendChild(disablebutton);
  buttons.appendChild(editbutton);
  buttons.appendChild(fart);
  buttons.appendChild(donebutton);
  task.appendChild(text);
  task.appendChild(buttons);
  if (title.value === "") {
    window.alert("please input title");
  } else if (desc.value === "") {
    window.alert("please input description");
  } else {
    if (progress.value === "todo") {
      parentDiv.insertBefore(task, todo);
    } else if (progress.value === "inprogress") {
      progressparent = progressid.parentNode;
      progressparent.insertBefore(task, progressid);
    } else if (progress.value === "stuck") {
      stuckparent = stuck.parentNode;
      stuckparent.insertBefore(task, stuck);
    } else if (progress.value === "done") {
      doneparent = done.parentNode;
      doneparent.insertBefore(task, done);
    }
  }
  title.value = "";
  desc.value = "";
  priority.value = "low";
  for (i = 0; i < 4; i++) {
    let elementcounter = bigboy[i].children.length;
    counter[i].innerHTML = elementcounter - 1;
  }
  uid++;
  backdrop.classList.remove("ontop");
});
// drag'n'drop
const card = document.getElementsByClassName("card");
const fallschrimjager = document.getElementsByClassName("bigboy");
for (var i = 0; i < fallschrimjager.length; i++) {
  fallschrimjager[i].addEventListener("dragenter", (event) => {
    event.preventDefault();
  });

  fallschrimjager[i].addEventListener("dragover", (event) => {
    event.preventDefault();
  });
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.currentTarget.id);
  for (i = 0; i < 4; i++) {
    let elementcounter = bigboy[i].children.length;
    counter[i].innerHTML = elementcounter - 1;
  }
}
function drop(ev) {
  var data = ev.dataTransfer.getData("text");
  ev.currentTarget.appendChild(document.getElementById(data));
  for (i = 0; i < 4; i++) {
    let elementcounter = bigboy[i].children.length;
    counter[i].innerHTML = elementcounter - 1;
  }
}
function allowDrop(ev) {
  ev.preventDefault();
}
function GetChildren() {}
function clearA() {
  lober.style.animation = "dance 0s infinite";
}
function lobsterm() {
  music.play();
  lober.style.animation = "dance 1s 26";
}
