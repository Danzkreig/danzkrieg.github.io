// let j = prompt("test");
// let cleaned = parseInt(j);
// let f = 10 - j;
// let sum = 0;
// while (f >= 0) {
//   f -= 1;
//   sum += cleaned;
//   cleaned += 1;
// }
// console.log(sum);

// function random(num) {
//   return Math.floor(Math.random() * num);
// }
// let randomnum = random(100);
// console.log(randomnum);
// let correct = 0;
// let answer = prompt("1-100, Pick." + randomnum);
// let cleaned = answer.match(/^[0-9]*$/);
// console.log(cleaned);
// while (correct === 0) {
//   if (cleaned == randomnum) {
//     window.alert("Correct!");
//     correct = 1;
//   } else if (cleaned > randomnum) {
//     window.alert("Lower.");
//     answer = prompt("1-100, Pick.");
//     cleaned = answer.match(/^[0-9]*$/);
//   } else if (cleaned < randomnum) {
//     window.alert("Higher.");
//     answer = prompt("1-100, Pick.");
//     cleaned = answer.match(/^[0-9]*$/);
//   } else {
//     console.log("Something went wrong.");
//   }
// }
// let test = prompt("enter a digit");
// let tester = prompt("how many");
// let tested = parseInt(tester) - 1;
// let testint = parseInt(test);
// while (tested >= 0) {
//   tested -= 1;
//   testint += 1;
//   test += testint;
// }
// console.log(test);
// let input = prompt("Hey how are you?");
// const upperLower = function (string) {
//   let newString = "",
//     newChar = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === " ") {
//       newChar = " ";
//     } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
//       newChar = string.charAt(i).toLowerCase();
//     } else {
//       newChar = string.charAt(i).toUpperCase();
//     }
//     newString += newChar;
//   }

//   return newString;
// };
// console.log(upperLower(input));
// let input = prompt("Number");
// let parsed = parseInt(input);
// let i = 1;
// let output = 0;
// if (parsed === 1 || parsed === 0) {
//   alert("Wrong!");
// } else if (input > 1000) {
//   alert("nope!");
// } else if (output < 1000) {
//   while (output < 1000) {
//     output = parsed ** i;
//     i += 1;
//   }
// } else {
//   ("Nope");
// }
// let hotfix = i - 1;
// window.alert(
//   input + "'s power of " + hotfix + " is larger then 1000: " + output
// );
// let input = prompt("Number");
// let parsed = parseInt(input);
// let i = 1;
// let output = 0;
// if (parsed === 0) {
//   alert("Wrong!");
// } else if (parsed % 2 == 0) {
// window.alert("Nope!")
// } else if (parsed > 0) {
//   while (parsed > 0) {
//     parsed = parsed - i;
//     console.log(parsed);
//     if (parsed % 2 == 0) {
//       console.log("Output is currently " + output);
//       console.log(parsed + "Has been added");
//       output += parsed;
//     }
//   }
// }
// window.alert(output);
// let input = prompt("Number");
// let parsed = parseInt(input);
// let i = 0;
// let output = "";
// while (parsed > 0) {
//   output += "*";
//   parsed -= 1;
//   console.log(output);
// }
// function largest(arr) {
//   let i;
//   let max = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// let arr = [1, 2, 3, 10];
// let biggestremoved = arr.filter((biggest) => biggest !== largest(arr));
// let difference = largest(arr) - largest(biggestremoved);
// console.log(largest(arr) + " and the difference is " + difference);
// let input = window.prompt("Number");
// let arr = input.split("");
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       var temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);
// let arr = [3, 4, 5];
// let max = 0;
// for (i = 0; i < arr.length; i++) {
//   max += parseInt(arr[i]);
// }
// console.log(max);
// let arr = [4, 6];
// let max = arr[0] * arr[1];
// let fax = (arr[0] + arr[1]) * 2;
// console.log(max + " " + fax);
// let arr = [1];
// let y = arr[0] * 3 - 5;
// console.log(y);
//y=4x2-3x+5
// let arr = -2;
// let y = arr ** 2 * 4 - arr * 3 + 5;
// console.log(y);
// let arr = 321;
// let arr2 = String(arr);
// let arr3 = arr2.split("");
// let max = parseInt(arr2[1]);
// console.log(max);
// let arr = 22;
// if (arr.toString().length === 2 && arr !== isNaN) {
//   console.log(arr / 2);
// } else {
//   console.log("fake");
// }
// let arr = 222;
// let arr2 = arr.toString();
// let arr3 = arr2.split("");
// let output = 0;
// if (arr.toString().length === 3 && arr !== isNaN) {
//   for (i = 0; i < arr3.length; i++) {
//     output += parseInt(arr3[i]);
//   }
//   console.log(output);
// } else {
//   console.log("fake");
// }
// let min = 200;
// let hour = 0;
// while (min > 60) {
//   min -= 60;
//   hour += 1;
// }
// console.log(hour + " " + min);
// let sec = 3612;
// let min = 0;
// let hour = 0;
// while (sec >= 60) {
//   sec -= 60;
//   min += 1;
// }
// if (min >= 60) {
//   while (min >= 60) {
//     min -= 60;
//     hour += 1;
//   }
// }
// console.log(hour + " " + min + " " + sec);
// let time = [3, 4];
// let secs = 0;
// while (time[0] > 0) {
//   time[0] -= 1;
//   secs += 60;
// }
// console.log(secs + time[1]);
// let time = [1, 2, 3];
// let secs = 0;
// while (time[0] > 0) {
//   time[0] -= 1;
//   secs += 3600;
// }
// while (time[1] > 0) {
//   time[1] -= 1;
//   secs += 60;
// }
// console.log(secs + time[2]);
// let hour = 44;
// let day = 0;
// while (hour > 24) {
//   hour -= 24;
//   day += 1;
// }
// console.log(day + " " + hour);
// let time = [2, 5];
// while (time[0] > 0) {
//   time[0] -= 1;
//   time[1] += 24;
// }
// console.log(time[1]);
// let month = 27;
// let year = 0;
// while (month > 12) {
//   month -= 12;
//   year += 1;
// }
// console.log(year + " " + month);
// let month = 7;
// let year = 2;
// while (year > 0) {
//   year -= 1;
//   month += 12;
// }
// console.log(month);
// let arr = [33, 3];
// if (arr[0] > arr[1]) {
//   console.log(arr[0]);
// } else {
//   console.log(arr[1]);
// }
// let arr = [33, 3];
// if (arr[0] < arr[1]) {
//   console.log(arr[0]);
// } else {
//   console.log(arr[1]);
// }
// let arr = [33, 333, 2131];
// if (arr[0] > arr[1] && arr[0] > arr[2]) {
//   console.log(arr[0]);
// } else if (arr[1] > arr[2]) {
//   console.log(arr[1]);
// } else {
//   console.log(arr[2]);
// }
// let arr = [33, 333, 2131, 1];
// if (arr[0] < arr[1] && arr[0] < arr[2] && arr[0] < arr[3]) {
//   console.log(arr[0]);
// } else if (arr[1] < arr[2] && arr[1] < arr[3]) {
//   console.log(arr[1]);
// } else if (arr[2] < arr[3]) {
//   console.log(arr[2]);
// } else {
//   console.log(arr[3]);
// }
// let arr = [85, 75, 96, 69];
// let output = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] >= 80) {
//     output += parseInt(arr[i]);
//   }
// }
// console.log(output);
// let arr = [3, 6, 2, 4];
// let multiplyarr = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < 5) {
//     multiplyarr += parseInt(arr[i]);
//   }
// }
// let parsed = multiplyarr.split("");
// console.log(parsed);
// let output = parsed[0];
// for (i = 1; i < parsed.length; i++) {
//   if (parsed[i] < 5) {
//     output *= parseInt(parsed[i]);
//   }
// }
// console.log(output);
// let arr = [10, 3, 5];
// let output = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     output += parseInt(arr[i]);
//   }
// }
// console.log(output);
// let arr = [5, 2, 3];
// let output = 0;
// let i = 0;
// while (output % 2 == 0 && output === 0) {
//   output = arr[i];
//   arr.splice(i, 1);
//   i++;
// }
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     output *= arr[i];
//   }
// }
// console.log(output);
// let arr = [2, 5, 5];
// let output = "";
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     output += arr[i];
//   }
// }
// console.log(output.length);
// let arr = [3, 12, 8, 9];
// let output = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 == 0) {
//     output.push(arr[i]);
//   }
// }
// console.log(output.length);
// let arr = [7, 22, 13, 30];
// let output = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 11 !== 0) {
//     output += arr[i];
//   }
// }
// console.log(output);
// let num = 9;
// let answer = num >= 11 ? console.log("YES") : console.log("NO!");
// console.log(answer);
// let num = 9;
// let answer = num > 5 ? console.log("YES") : console.log("NO!");
// console.log(answer);
// let num = 9;
// let answer = num % 2 == 0 ? console.log("YES") : console.log("NO!");
// console.log(answer);
// let num = 4;
// let answer =
//   num > 3 && num < 6 ? console.log("Success") : console.log("Failure!");
// console.log(answer);
// let num = 3;
// switch (num) {
//   case 2:
//     console.log("Bad");
//     break;
//   case 3:
//     console.log("Decent");
//     break;
//   case 4:
//     console.log("Good");
//     break;
//   case 5:
//     console.log("Perfect");
//     break;
//   default:
//     console.log("Fuck you");
//     break;
// }
// let num = 88;
// if (num >= 89) {
//   console.log("A");
// } else if (num >= 79) {
//   console.log("B");
// } else if (num >= 69) {
//   console.log("C");
// } else if (num >= 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }
// console.log("IOI");
// for (i = 0; i < 3; i++) {
//   console.log("IOI");
// }
// let num = prompt("number");
// for (i = 0; i < parseInt(num); i++) {
//   console.log("IOI");
// }
// let num = prompt("number");
// let output = parseInt(num) + parseInt(num) * 2;
// console.log(output);
// let num = prompt("number");
// let parsed = parseInt(num);
// let result = parsed;
// while (parsed > 1) {
//   parsed--;
//   result *= parsed;
// }
// console.log(result);
// let num = 6;
// let hundreds = num * 100;
// console.log(hundreds);
// let num = prompt("What number");
// let add = prompt("How many times");
// let real = parseInt(num) * parseInt(add);
// console.log(real);
// let num = prompt("2 to the power of what?");
// let real = 2 ** parseInt(num);
// console.log(real);
// let num = prompt("Initial Number?");
// let number = prompt("To the power of?");
// let real = parseInt(num) ** parseInt(number);
// console.log(real);
// let num = prompt("Day");
// let parse = parseInt(num);
// switch (parse) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("Invalid Input");
//     break;
// }
// let num = prompt("month");
// let parse = parseInt(num);
// switch (parse) {
//   case 1:
//   case 2:
//     console.log("Spring");
//     break;
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     console.log("Summer");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("Autumn");
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log("Winter");
//     break;
// }
// let num = prompt("Number");
// let secondaryw = prompt("up to the power of");
// if (parseInt(num) <= 10 && parseInt(secondaryw) <= 10) {
//   for (i = 1; i < parseInt(secondaryw) + 1; i++) {
//     console.log(parseInt(num) + "^" + i + "=" + parseInt(num) ** i);
//   }
// } else {
//   console.log("Fake");
// }
// let num = parseInt(prompt("how many floors :"));
// let num2 = parseInt(prompt("how many doors per floor :"));
// let num3 = parseInt(prompt("which door:"));
// num3 = num3 - 1;
// num = Math.floor(num3 / num2) + 1;
// num2 = (num3 % num2) + 1;
// console.log(num + " " + num2);
// const str = "Bayn Baile"; //B. Dorj
// function Name(str) {
//   let split = str.split(" ");
//   let answer = String(split[0]).charAt(0).toUpperCase();
//   let answer2 = String(split[1]).charAt(0).toUpperCase();
//   let last = split[1].split("");
//   last[0] = answer2;
//   let realanswer = last.join("");
//   console.log(answer + ". " + realanswer);
// }
// Name(str);
// const animals = [
//   { type: "dog", sound: "woof" },
//   { type: "cow", sound: "moo" },
//   { type: "cat", sound: "meow" },
// ];
// function animalsound(animal) {
//   for (i = 0; i < animals.length; i++) {
//     if (animals[i].type === animal) {
//       console.log("The " + animal + " goes " + animals[i].sound);
//     }
//   }
// }
// let ask = prompt("Pick an animal, dog, cat, cow");
// animalsound(ask);
// let classmates = [
//   {
//     name: "Conscript",
//     DOB: 2001,
//     single: true,
//   },
//   {
//     name: "Ramzan Kadyrov",
//     DOB: 1983,
//     single: false,
//   },
//   {
//     name: "Vladmir Vladmirovich Putin",
//     DOB: 1975,
//     single: false,
//   },
//   {
//     name: "Ivan, The alcholic",
//     DOB: 2012,
//     single: true,
//   },
//   {
//     name: "SU-25 Pilot",
//     DOB: 1999,
//     single: true,
//   },
// ];
// let singles = "";
// let over20 = " ";
// for (i = 0; i < classmates.length; i++) {
//   if (classmates[i].single === true) {
//     singles += " " + classmates[i].name + "";
//   }
//   if (classmates[i].DOB <= 2003) {
//     over20 += "" + classmates[i].name + " ";
//   }
// }
// console.log(
//   "These people are single:" +
//     singles +
//     ", And In your class these people are aged over 20: " +
//     over20
// );
// Find index of
// const fruits = [
//   "apple",
//   "durian",
//   "mango",
//   "apple",
//   "banana",
//   "dragonfruit",
//   "orange",
//   "grapes",
//   "watermelon",
//   "apricot",
//   "papaya",
//   "Kiwi",
// ];
// function findIndex(finding) {
//   for (i = 0; i < fruits.length; i++) {
//     if (fruits[i] === finding && i === 1) {
//       return i + "st element of the array";
//     } else if (fruits[i] === finding && i >= 10) {
//       return i + "th element of the array";
//     } else if (fruits[i] === finding) {
//       return i + "nd element of the array";
//     }
//   }
// }
// console.log(findIndex("papaya"));
// // Function Join
// const something = ["John", "Hickle", "Huckleberry"];
// function funcJoin(joiner, array) {
//   output = array[0];
//   for (i = 1; i < array.length; i++) {
//     output += joiner + array[i];
//   }
//   return output;
// }
// console.log(funcJoin(" and ", something));
// // function to string
// const something2 = ["John", "Hickle", "Huckleberry"];
// function funcToString(array) {
//   output = array[0];
//   for (i = 1; i < array.length; i++) {
//     output += "," + array[i];
//   }
//   return output;
// }
// console.log(funcToString(something2));
// //function includes
// const something3 = ["John", "Hickle", "Huckleberry"];
// function funcIncludes(includes, array) {
//   output = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === includes) {
//       output++;
//     }
//   }
//   if (output > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(funcIncludes("John", something3));
// const arr = [1, 3, 5, 22, 89, 46, 17, 31, 59];
// function minMax(arr) {
//   max = arr[0];
//   min = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min + " and " + max;
// }
// console.log(minMax(arr));
// const arr = [5, 6, 4, 3, 2, 1];
// function sort(arr) {
//   store = arr.length;
//   temp = 9999;
//   output = [];
//   j = 0;
//   do {
//     for (i = 0; i < store; i++) {
//       if (temp > arr[i]) {
//         temp = arr[i];
//       }
//     }
//     output.push(temp);
//     thing = arr.indexOf(temp);
//     arr.splice(thing, 1);
//     temp = 10000;
//     j += 1;
//   } while (j < store);
//   console.log(output);
// }
// sort(arr);
// const arr = [10, 9, 2, 5, 3, 7, 101, 18];
// function sequence(arr) {
//   output = [];
//   temp = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > temp) {
//       temp = arr[i];
//       output += " " + arr[i];
//     }
//   }
//   console.log(output);
// }
// sequence(arr);
// find special number
// const arr = [2, 4, 7, 6, 8, 10];
// function findspecial(arr) {
//   even = 0;
//   evenitems = 0;
//   odd = 0;
//   odditems = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even += 1;
//       evenitems += arr[i];
//     } else {
//       odd += 1;
//       odditems += arr[i];
//     }
//   }
//   if (even > odd && odditems === 0) {
//     return "No odd items";
//   } else if (odd > even && evenitems === 0) {
//     return "No even items";
//   } else if (even > odd) {
//     return odditems;
//   } else if (odd > even) {
//     return evenitems;
//   } else {
//     return "No special number";
//   }
// }
// console.log(findspecial(arr));
// const cube = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];
// function checkcube(arr) {
//   temp = 0;
//   tarray = [];
//   for (i = 0; i < arr.length; i++) {
//     bs = arr[i];
//     for (j = 0; j < arr[i].length; j++) {
//       temp += arr[i][j];
//     }
//     tarray.push(temp);
//     temp = 0;
//   }
//   for (i = 0; i < tarray.length - 1; i++) {
//     if (tarray[i] !== tarray[i + 1]) {
//       return "Nu uh";
//     } else {
//       return "Its all even";
//     }
//   }
// }
// console.log(checkcube(cube));
// const arr = [1, 2, 3, 4];
// function test(arr, num) {
//   console.log(arr.concat(num));
//   arr.pop();
//   console.log(arr);
// }
// test(arr, 123);
// [1,2,3,4,num]
// average
// const arr = [1, 2, 3, 4];
// function average(arr) {
//   sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// average
// console.log(average(arr));
// const arr = [1, 6, 3, 4];
// function max(arr) {
//   max = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(max(arr));
// reverse
// const arr = [1, 33, 6, 3, 4, 8, 34, 22];
// function reverse(ar  r) {
//   output = [];
//   for (i = arr.length - 1; i >= 0; i--) {
//     output.push(arr[i]);
//   }
//   return output;
// }
// console.log(reverse(arr));
// squared
// const arr = [1, 6, 3, 4];
// function square(arr) {
//   output = [];
//   for (i = 0; i < arr.length; i++) {
//     output.push(arr[i] ** 2);
//   }
//   return output;
// }
// console.log(square(arr));
// remove duplicates
// const arr = [1, 6, 3, 4, 4, 3, 8];
// function removedup(arr) {
//   output = [];
//   for (i = 0; i < arr.length; i++) {
//     if (output.includes(arr[i])) {
//     } else {
//       output.push(arr[i]);
//     }
//   }
//   return output;
// }
// console.log(removedup(arr));
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const arr = [3, 2, 4];
// var twoSum = function (nums, target) {
//   output = [];
//   fuse = 0;
//   for (i = 0; i < nums.length; i++) {
//     for (j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target && fuse === 0) {
//         k = i;
//         l = j;
//         fuse + 1;
//       }
//     }
//   }
//   console.log(l, k);
//   output.push(l, k);
//   return output;
// };
// console.log(twoSum(arr, 6));
// let living = 0;
// let dead = 0;
// function deathplace() {
//   compare = Math.random();
//   if (compare < 0.3) {
//     return " Donbass";
//   } else if (compare < 0.6) {
//     return " Kherson";
//   } else if (compare < 0.9) {
//     return " Bakhmut";
//   } else {
//     return " Luhansk";
//   }
// }
// function deadoralive() {
//   compare = Math.random();
//   if (compare >= 0.5) {
//     return " Alive and fighting in " + deathplace();
//   } else {
//     return " KIA at " + deathplace();
//   }
// }
// function firstname() {
//   compare = Math.random();
//   if (compare < 0.05) {
//     return "Yuri ";
//   } else if (compare < 0.1) {
//     return "Joseph ";
//   } else if (compare < 0.15) {
//     return "Oleg ";
//   } else if (compare < 0.2) {
//     return "Artyom ";
//   } else if (compare < 0.25) {
//     return "Kirill ";
//   } else if (compare < 0.3) {
//     return "Aleksandr ";
//   } else if (compare < 0.35) {
//     return "Victor ";
//   } else if (compare < 0.4) {
//     return "Romanov ";
//   } else if (compare < 0.45) {
//     return "Nikita ";
//   } else if (compare < 0.5) {
//     return "Yevgeny ";
//   } else if (compare < 0.55) {
//     return "Leonid ";
//   } else if (compare < 0.6) {
//     return "Ivan ";
//   } else if (compare < 0.65) {
//     return "Igor ";
//   } else if (compare < 0.7) {
//     return "Dimitry ";
//   } else if (compare < 0.75) {
//     return "Lev ";
//   } else if (compare < 0.8) {
//     return "Sergey ";
//   } else if (compare < 0.85) {
//     return "Maxim ";
//   } else if (compare < 0.9) {
//     return "Nikolai ";
//   } else if (compare < 0.95) {
//     return "Pasha ";
//   } else {
//     return "Mikhail ";
//   }
// }
// function lastname() {
//   compare = Math.random();
//   if (compare < 0.05) {
//     return "Yurinov";
//   } else if (compare < 0.1) {
//     return "Petrov";
//   } else if (compare < 0.15) {
//     return "Rostova";
//   } else if (compare < 0.2) {
//     return "Kuznetsov";
//   } else if (compare < 0.25) {
//     return "Karenina";
//   } else if (compare < 0.3) {
//     return "Sokolov";
//   } else if (compare < 0.35) {
//     return "Popov";
//   } else if (compare < 0.4) {
//     return "Ilyin";
//   } else if (compare < 0.45) {
//     return "Pushkin";
//   } else if (compare < 0.5) {
//     return "Stepanov";
//   } else if (compare < 0.55) {
//     return "Vasiliev";
//   } else if (compare < 0.6) {
//     return "Ivanov";
//   } else if (compare < 0.65) {
//     return "Morozov";
//   } else if (compare < 0.7) {
//     return "Preobrazhensky";
//   } else if (compare < 0.75) {
//     return "Alekseev";
//   } else if (compare < 0.8) {
//     return "Turgenev";
//   } else if (compare < 0.85) {
//     return "Federov";
//   } else if (compare < 0.9) {
//     return "Borisyuk";
//   } else if (compare < 9.5) {
//     return "Nikolaev";
//   } else {
//     return "Gurkin";
//   }
// }
// function yearofdeath() {
//   return Math.round(Math.random() * (2023 - 2014) + 2014);
// }
// let thing = parseInt(prompt("number of fighters?"));
// let dummy = document.querySelectorAll("div.dummy");
// let content = document.createTextNode("warhasbegun");
// let bars = document.createElement("div");
// const frontline = document.getElementById("div1");
// for (let i = 1; i <= thing; i++) {
//   bars = document.createElement("div");
//   content = document.createTextNode(
//     firstname() + lastname() + " | " + deadoralive()
//   );
//   if (deadoralive() == " Alive and fighting in " + deathplace()) {
//     living += 1;
//   } else {
//     dead += 1;
//   }
//   bars.appendChild(content);
//   document.body.insertBefore(bars, frontline);
// }
// window.alert(
//   living +
//     " survived the war. " +
//     dead +
//     " Didn't. " +
//     Math.round((100 * living) / thing) +
//     "% of total number of troops survived."
// );
// const email = document.getElementById("email");
// const emailval = email.value;
// function validation(inputs) {
//   emailval = document.getElementById("email").value;
//   correct = 0;
//   cmv = emailval.split("");
//   for (i = 0; i < cmv.length; i++) {
//     if (cmv[i] == "@") {
//       correct += 1;
//     }
//     if (cmv[i] == ".") {
//       correct += 1;
//     }
//   }
//   if (correct == 2) {
//     if (
//       document.getElementById("psw").value ===
//       document.getElementById("repeatPsw").value
//     ) {
//       if (document.getElementById("psw").value.length >= 8) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
//   // 2 password хоорондоо адил байгаа эсэх
//   // password ийн урт 8с урт байх ёстой
//   // email дотор заавал @ болон . орсон байх
//   // эдгээр нөхцөл биелсэн бол true буцаана

//   //жишээ хэрэглээ
//   console.log("Email input ийн урт: ", inputs.email.value.length);
//   return false;
// }
// // бүх input үүдийг inputs-д авч байна
// const inputs = document.getElementsByTagName("input");
// // хэдэн input байгааг тоолж байна
// const howManyInputs = document.getElementsByTagName("input").length;

// for (let i = 0; i < howManyInputs; i++) {
//   // input бүрт addEventListener өгч change эвэнтийг сонсож байна
//   inputs[i].addEventListener("change", () => {
//     // input ийн утга өөрчлөгдөх бүрт 3н input үүдийн утгуудыг харж болно
//     console.log("Email-ийн утга: ", inputs.email.value);
//     console.log("Password-ийн утга: ", inputs.psw.value);
//     console.log("repeatPsw-ийн утга: ", inputs.repeatPsw.value);

//     // бүх input үүдийг авч зөв эсэхийг шалгах фүнкц дуудаж байна
//     if (validation(inputs)) {
//       document.querySelector(".registerBtn").disabled = false;
//     }
//   });
// }
