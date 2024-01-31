"use strict";
//Object destructuring....
// demo object don't bother with the data okk!!
const restraunt = {
  name: "Rock n Roll WestBengal",
  foodType: "Indian",
  starter: ["cha", "coffee", "puri", "alur dum", "luchi"],
  mainCourse: ["rice", "fish", "curry", "sukto"],
  openingTime: {
    mon: {
      open: "9:00",
      close: "22:00",
    },
    tue: {
      open: "10:00",
      close: "22:00",
    },
    sun: {},
  },
};

// destructuring this object
// const { name } = restraunt;
//       |_____| <- This should be exactly same as property name

// console.log(name);

// alias of the destructured name
const { name: restrauntName } = restraunt;

console.log(restrauntName);

//alias with default value
const { foundedAt: aliasMayBe = "0000", name: restrauntNewName } = restraunt;

console.log(aliasMayBe, restrauntNewName);
// 0000, Rock n Roll WestBengal
// if foundedAt is present then it will be initialised with that property
// otherwise default will be taken to initialise

//lets create a function that will deliver the food to the customer

//redeclare is not allowed in let

// hoisting
