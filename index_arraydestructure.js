"use strict";
const arr = [2, 3, 4, 5, 6];

// const [a, b] = arr;
// console.log(a, b);

// const [a, , b, c, , d] = arr;
// console.log(a, b, c, d);
// arr.push(7);
// const [a, , b, c, , d] = arr;

const [a = 0, , b = 0, c = 0, , d = 6] = arr;
console.log(a, b, c, d);

function findFirstSecond([first, second]) {
  console.log(first, second);
}

findFirstSecond(arr);
