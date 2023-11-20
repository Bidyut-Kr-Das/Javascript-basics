// "use strict";

//@ objects in js

// let currentYear = 2023;

// const student1 = {
//   firstname: "Bidyut",
//   surname: "Das",
//   hobbies: ["Coding", "Gaming", "Playing"],
//   extraDetails: {
//     isMarraied: false,
//     hasADog: true,
//     laptop: {
//       accessible: true,
//       laptopModel: "hp",
//       boughtOn: "23/08/2020",
//     },
//   },
//   birthYear: 2000,
//   colgate: () => {
//     student1.age = currentYear - student1.birthYear;
//   },
// };

// dot notation
// console.log(student1.firstname);

// student1.hobbies.forEach((value) => {
//   console.log(value);
// });

// student1.hobbies.push("flirting");

// student1.hobbies.forEach((value) => {
//   console.log(value);
// });

// student1.dogName = "Zico";

// student1.calcAge();
// console.log(student1);

//bracket notation
// console.log(student1["firstname"]);

// const data = prompt("Enter the property name");

// const divElement = document.getElementById("data");
// // console.log(divElement);
// divElement.innerHTML = student1[data];

// console.log(student1["extraDetails"]["hasADog"]);

// student1.colgate();
// student1["colgate"]();

// let username = "Bidyut";

// username = "Kingshuk";

// username = "Arnab";

// console.log(username);
// console.log(username);

// rest operator and spread operator
// function sum(a, b, ...allofTheRest) {
//   //   let sum = 0;
//   let res = allofTheRest.reduce((total, value) => {
//     return total + value;
//   }, 0);

//   return a + b + res;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 22233, 33434, 3434));

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [9, 8, 7, 6, 5];

// const arr3 = [];

// arr1.forEach((value) => {
//   arr3.push(value);
// });
// arr2.forEach((value) => {
//   arr3.push(value);
// });

// console.log(arr3);

// const arr3 = [...arr1, ...arr2, 5, 6, 7, "Bidyut"];
// console.log(arr3);

// const student2 = {
//   ...student1,
//   firstname: "kingshuk",
//   surname: "sil",
//   birthYear: "2001",
//   hasABaby: false,
// };

// console.log(student2);

console.log(firstName);

var firstName = "Bidyut";
