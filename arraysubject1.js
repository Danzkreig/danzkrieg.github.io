// let students = [
//   {
//     name: "Сэд-Эрдэнэ",
//     age: 30,
//     gender: "male",
//   },
//   {
//     name: "Индра",
//     age: 30,
//     gender: "female",
//   },
//   {
//     name: "Хатнаа",
//     age: 30,
//     gender: "male",
//   },
//   {
//     name: "Тэмүүлэн",
//     age: 20,
//     gender: "male",
//   },
//   {
//     name: "Намуун",
//     age: 20,
//     gender: "female",
//   },
// ];
// function MorF(arr) {
//   let males = [];
//   let females = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].gender === "male") {
//       males += arr[i].name + ",";
//     } else {
//       females += arr[i].name + ",";
//     }
//   }
//   return males + ". The females are as follows: " + females;
// }
// function mediumage(arr) {
//   let num = 0;
//   for (i = 0; i < arr.length; i++) {
//     num += arr[i].age;
//   }
//   return Math.round(num / arr.length);
// }
// function addLastName(arr) {
//   let kanji = [];
//   Object.assign(kanji, arr);
//   for (i = 0; i < arr.length; i++) {
//     kanji[i].LastName = "Hinkleheimer";
//   }
//   return kanji;
// }
// function sameAge(arr) {
//   output = [];
//   for (i = 0; i < arr.length; i++) {
//     test = arr[i];
//     output.push(arr.filter((x) => x.age === test.age));
//     arr.splice(i, 2);
//   }
//   return output;
// }
// console.log(sameAge(students));
// const array = [-2, -3, 4, -1, -2, 1, 5, -3];
// function findMaxSum(arr) {
//   temp = [];
//   max = 0;
//   sum = 0;
//   // this is hot garbage, there has gotta be a better way of parsing this array
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr.length; j++) {
//       sum = 0;
//       fart = arr.slice(i, j);
//       for (let k = 0; k < fart.length; k++) {
//         sum += fart[k];
//       }
//       if (sum > max) {
//         max = sum;
//         temp = fart;
//       }
//     }
//   }
//   return temp;
// }
// console.log(findMaxSum(array));
// const arr = "The quick brown fox jumps over the lazy dog";
// function findBiggestWord(arr) {
//   let ded = arr.split(" ");
//   let largest = 0;
//   let word = "";
//   for (i = 0; i < ded.length; i++) {
//     if (ded[i].length > largest) {
//       largest = ded[i].length;
//       word = ded[i];
//     }
//   }
//   return word;
// }
// console.log(findBiggestWord(arr));
// const arr = [2, 5, 6, 7];
// const target = 9;
// function find(arr, t) {
//   sum = 0;
//   nums = [];
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       sum = 0;
//       sum = arr[i] + arr[j];
//       if (sum === t) {
//         nums.push(i, j);
//       }
//     }
//   }
//   return nums;
// }
// console.log(find(arr, target));
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function reverser(arr) {
//   joshua = [];
//   for (i = arr.length - 1; i >= 0; i--) {
//     joshua.push(arr[i]);
//   }
//   return joshua;
// }
// console.log(reverser(arr));
// const arr = { b: 2, a: 1, c: 3 };
// function lowtohigh(arr) {
//   stuff = [];
//   for (var thing in arr) {
//     stuff.push([thing, arr[thing]]);
//   }
//   stuff.sort(function (a, b) {
//     return a[1] - b[1];
//   });
//   return stuff;
// }
// console.log(lowtohigh(arr));
// var date = "2023-11-1";
// var added = "9000";
// function dateAdd(date, add) {
//   let shit = date.split("-");
//   let day = parseInt(shit[2]);
//   let month = parseInt(shit[1]);
//   let year = parseInt(shit[0]);
//   day += parseInt(add);
//   if (day > 31) {
//     do {
//       switch (month) {
//         case 1:
//           day -= 30;
//           month += 1;
//           break;
//         case 2:
//           day -= 29;
//           month += 1;
//           break;
//         case 3:
//           day -= 31;
//           month += 1;
//           break;
//         case 4:
//           day -= 30;
//           month += 1;
//           break;
//         case 5:
//           day -= 31;
//           month += 1;
//           break;
//         case 6:
//           day -= 30;
//           month += 1;
//           break;
//         case 7:
//           day -= 31;
//           month += 1;
//           break;
//         case 8:
//           day -= 31;
//           month += 1;
//           break;
//         case 9:
//           day -= 30;
//           month += 1;
//           break;
//         case 10:
//           day -= 31;
//           month += 1;
//           break;
//         case 11:
//           day -= 30;
//           month += 1;
//           break;
//         case 12:
//           day -= 31;
//           month += 1;
//           break;
//         default:
//           console.log("Case Error.");
//           break;
//       }
//       if (month > 12) {
//         do {
//           month -= 12;
//           year += 1;
//         } while (month > 12);
//       }
//     } while (day > 31);
//   }
//   return year + "-" + month + "-" + day;
// }
// console.log(dateAdd(date, added));
