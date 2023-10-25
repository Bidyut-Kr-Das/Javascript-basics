//Type conversion

const num1 = 1991;

//lets convert into string by using the String()

const newNum = String(num1);
console.log(typeof newNum);

// Conver string to number using Number();
const string1 = "1991";
const nextNum = Number(string1);
console.log(typeof nextNum);

// type coercion
// type coercion is automatic type conversion in javascript
// example
let stringA = "45" + 45;
// + operator is used to concat string so string coercion is selected by default

console.log(stringA); //output is 4545

// There is no use of - in string so number coercion is used here
let variableB = "45" - 45;
console.log(variableB); //output is 0

console.log("3" + 3);
console.log(3 + "3");
console.log("3" - "3" + 3); //anything operator between strings except + will coerce the type string to type number
//so above will be 3-3 = 0 then 0+3 as last 3 is number so res will be 3
// but for
console.log("3" - "3" + "3");
// this will be 3-3 = 0 the '0'+'3' is 03

// TYPE CONVERSION IN Boolean
// only these values will be converted to false others will be true always

// falsy values
// 0, null , '', NaN , undefined and false

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

// type coercion only happens in the conditional statement and logical operators
let height;
if (height)
  //here height is undefined which will coerce into false as its falsy value
  console.log("height is defined");
else console.log("height is undefined");
// same goes for all the falsy values

// Equality operator
// == and  ===
// by default the == operators does the type coercion
// example
if ("36" == 36) {
} // returns true; //This will convert the string to number and will check if its match
// === This is called strict equality operator and does not convert the type of the values

if ("36" === 36) {
} // returns false; //This will check if the data Type also matches the other if it doesn't then it will return false
