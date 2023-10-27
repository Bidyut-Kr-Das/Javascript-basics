"use strict";
//array
const friends = ["Ram", "Shyam", "jodu"];
//@.push() inserts value at the end
// it returns the array length
friends.push("modhu");
console.log(friends);
// .unshift() inserts value at the start
friends.unshift("ajay");
console.log(friends);

//.pop() deletes the last element from the array
//it also returns the removed item
friends.pop();
console.log(friends);

//.shift() deletes the first element from the array
friends.shift();
console.log(friends);
// console.log(varubale);

//we can know index of element if the index is notpresent then it will return -1
// .indexOf(element)
let index = friends.indexOf("Ram");
console.log(index);
index = friends.indexOf("ajay");
console.log(index);

//.contains(element) returns true if element is in the array and false if it doesn't

console.log(friends.includes("Ram")); //returns true

console.log(friends.includes("Bidyut")); //returns false
