"use strict";
//functions
// using function keyword
//function declaration
function logger() {
  console.log("my name is Bidyut");
}

//invoking/calling/running function
logger();

//parameters in functions

function foodProcessor(apples, oranges) {
  // console.log(apples);
  // console.log(oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juice = foodProcessor(5, 6);
console.log(juice);

// function expression
const newFunction = function (a, b) {
  return a + b;
};
// as function produces values so we can use it and store it in a variable like an expression

// arrow function
//one prarameter and one line of code

const calcAge = (birthYear) => 2023 - birthYear;

// multiple parameter and multiple lines of code

const calcRetirement = (birthYear, retirementYear) => {
  age = 2023 - birthYear;
  retirementYearsLeft = retirementYear - age;
};
