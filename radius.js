let fifty = 0;
let hundred = 0;
let fhundred = 0;
let onek = 0;
let fivek = 0;
let tenk = 0;
let object = prompt(
  " 1. Cola 1200, 2. Sprite 1500, 3. Chocolate 2000, 4. Milk 2200, 5. Bread 1000, 6. Icecream 500, 7. Gum 150, 8. Vodka 15000"
);
let cleaner = cleaned[0];
let money = prompt("Insert Cash. Accepted amounts: 5000, 10000, 20000");
let moneyneeded = "99999";
switch (cleaner) {
  case "1" || "Cola":
    moneyneeded = "1200";
    bought = "Cola";
    break;
  case "2":
    moneyneeded = "1500";
    bought = "Spite";
    break;
  case "3":
    moneyneeded = "2000";
    bought = "Chocolate";
    break;
  case "4":
    moneyneeded = "2200";
    bought = "Milk";
    break;
  case "5":
    moneyneeded = "1000";
    bought = "Bread";
    break;
  case "6":
    moneyneeded = "500";
    bought = "Icecream";
    break;
  case "7":
    moneyneeded = "150";
    bought = "Gum";
    break;
  case "8":
    moneyneeded = "15000";
    bought = "Vodka";
    break;
  default:
    window.alert("1-8 Only.");
    break;
}
switch (money) {
  case "5000":
    money = "5000";
    break;
  case "10000":
    money = "10000";
    break;
  case "20000":
    money = "20000";
    break;
  default:
    window.alert("Invalid cash amount");
}
const output = money - moneyneeded + "₮";
const rawoutput = money - moneyneeded;
let outputm = money - moneyneeded;
if (outputm >= 10000) {
  do {
    outputm -= 10000;
    tenk += 1;
  } while (outputm >= 10000 && outputm > 0);
}
if (outputm >= 5000) {
  do {
    outputm -= 5000;
    fivek += 1;
  } while (outputm >= 5000 && outputm > 0);
}
if (outputm >= 1000) {
  do {
    outputm -= 1000;
    onek += 1;
  } while (outputm >= 1000 && outputm > 0);
}
if (outputm >= 500) {
  do {
    outputm -= 500;
    fhundred += 1;
  } while (outputm >= 500 && outputm > 0);
}
if (outputm >= 100) {
  do {
    outputm -= 100;
    hundred += 1;
  } while (outputm >= 100 && outputm > 0);
}
if (outputm >= 50) {
  do {
    outputm -= 50;
    fifty += 1;
  } while (outputm >= 50 && outputm > 0);
}
let fiftynote = fifty + " 50₮, ";
let hundrednote = hundred + " 100₮, ";
let fhundrednote = fhundred + " 500₮, ";
let oneknote = onek + " 1000₮, ";
let fiveknote = fivek + " 5000₮, ";
let tenknote = tenk + " 10000₮, ";
let answer =
  bought +
  " And " +
  tenknote +
  fiveknote +
  oneknote +
  fhundrednote +
  hundrednote +
  fiftynote +
  " For a total of " +
  output;
console.log(rawoutput);
if (outputm >= 0) {
  window.alert(answer);
} else if (rawoutput < 0) {
  window.alert("You cannot afford it. Here is your money back. " + money + "₮");
}
