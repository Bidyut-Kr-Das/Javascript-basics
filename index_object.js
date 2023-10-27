"use strict";
//Objects - key:value
//object literal syntax
const studentObject = {
  firstName: "Bidyut",
  lastName: "Das",
  age: 23,
  languagesMastered: ["java", "javascript", "typescript"],
};

console.log(studentObject);

// accessing the object keys
// using dot notation
console.log(studentObject.firstName);
// bracket notation
console.log(studentObject["lastName"]); //we can write expression to calculate or fetch the key name

// example suppose the Name is put inside namekey variable
const nameKey = "Name";

console.log(studentObject["first" + nameKey]); //returns Bidyut
console.log(studentObject["last" + nameKey]); //returns Das
