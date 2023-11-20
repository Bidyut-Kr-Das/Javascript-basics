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
console.log(studentObject["last" + nameKey]); //returns Das`

//Where can we use this bracket notation?
// example
// const getData = prompt(
//   "Select between firstName, lastName, age, languagesMastered"
// );
//use this example in browser as prompt will not work in nodejs
// studentObject[getData]
//    ? console.log(studentObject[getData])
//   : console.log("no property found");

//inserting in the object
// we can use dot or bracket notation
studentObject.admission = 2022;
console.log(studentObject);

//challenge
// print the line dynamically using object
// Bidyut Das is of 23 years old and tool admission in 2022. He masterd java.

const data1 = {
  firstName: "Bidyut",
  lastName: "Das",
  age: 23,
  admission: 2022,
  languages: ["java", "javascript"],
};

const challengeString = `${data1.firstName} ${data1.lastName} is of ${data1.age} years old and took admission in ${data1.admission}. He masterd ${data1.languages.length} languages.`;
console.log(challengeString);

//methods aka function inside objects

const data2 = {
  firstName: "Bidyut",
  lastName: "Das",
  age: 23,
  admission: 2022,
  languages: ["java", "javascript"],
  //functions inside object is called methods
  calcLanguages: function (languages) {
    return languages.length;
  },
};

// using methods
//dot notation
console.log(data2.calcLanguages(data2.languages));
//bracket notatin
console.log(data2["calcLanguages"](data2.languages));
//         |_____________________| <- This whole part is function and then we write parameters

// using of this keyword in methods
const data3 = {
  firstName: "Bidyut",
  lastName: "Das",
  age: 23,
  admission: 2022,
  languages: ["java", "javascript"],
  calcLanguages: function () {
    console.log(this); //this keywords holds the object which called this method
    return this.languages.length;
  },
};

// we can even add property in the methods
const data4 = {
  firstName: "Bidyut",
  lastName: "Das",
  age: 23,
  admission: 2022,
  languages: ["java", "javascript"],
  calcLanguages: function () {
    this.languageNumber = this.languages.length;
    // return 5;
  },
};
// now we can use the language number anytime after running the calcLanguage once
// challenge :
// create a funciton that will summarise what the data is all about in that object
const data5 = {
  firstName: "Bidyut",
  lastName: "Das",
  age: 23,
  admission: 2022,
  languages: ["java", "javascript"],
  makeSummary: () => {
    this.summary = `${this.firstName} ${this.lastName} is of ${this.age} years old`;
  },
};
data5.makeSummary();
console.log(data5.summary);

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`rollded ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
