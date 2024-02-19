export const calculate = (sign, number, number2) => {
  if (sign === "plus") {
    return parseInt(number) + parseInt(number2);
  } else if (sign === "minus") {
    return number - number2;
  } else if (sign === "times") {
    return number * number2;
  } else if (sign === "divide") {
    return number / number2;
  } else if (sign === "percent") {
    return number / number2;
  } else {
    return "Fuck!, Error occured in number processing";
  }
};
