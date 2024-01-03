function minus(num1, num2) {
  console.log(num1 - num2);
}
function plus(num1, num2) {
  console.log(num1 + num2);
}
function divide(num1, num2) {
  console.log(num1 / num2);
}
function multiply(num1, num2) {
  console.log(num1 * num2);
}
function power(num1, num2) {
  console.log(num1 ** num2);
}
// functions to do this things
let num1 = prompt("Number to be");
let symbol = prompt("What do you want?");
let num2 = prompt("Number That does");
//get user input
let clean1 = num1.match(/\d/);
let clean2 = num2.match(/\d/);
//clean user input (unused)
if (isNaN(num1) && isNaN(num2)) {
  alert("Both numbers are not numbers");
} else if (isNaN(num1)) {
  alert("First number is not a number");
} else if (isNaN(num2)) {
  alert("Second number is not a number");
  //detects if numbers are not number (TODO: Use clean user input in order to decrease size)
} else {
  switch (symbol) {
    case "-":
      minus(num1, num2);
      break;
    case "+":
      plus(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "^":
      power(num1, num2);
      break;
    default:
      window.alert("Acceptable symbol not detected  !");
    // does the thing
  }
}
