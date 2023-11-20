//ES 6 AND BELOW
// var username = "kingshuk";

// ES 6 keyword to declare variable
// let and const

let username1 = "kingshuk";
username1 = username1 + "akash";

/*
java syntax
int a = 5
for(int i  = 0;i<5;i++){
 i = 0
 i = 1   
}
a = 6

*/

const surname = "sil";
// console.log(surname + username1);

//expression and statement

// surname = "das";

// Types
// String
let username = "kingshuk";
username = username + "akash";
let bidyut = typeof username;
username = 1;

// console.log(typeof bidyut);

// automatic type conversion is called // ? type coersion

username = String(username);

// console.log(username);
// console.log(typeof username);

username = Number(username);
// console.log(typeof username);

let studentId = 2210010110601623478926781627836718;
// console.log(typeof studentId);

let kingshukIsMarried = true;
// console.log(typeof kingshukIsMarried);

let kingshukHasBaby; //camel case
// console.log(typeof kingshukHasBaby); //undefined

let kingshukHasGf = null;
// console.log(typeof kingshukHasGf);

let specialNumber = NaN;
// console.log(typeof specialNumber);

//any
//Every type is allowed here.
//json = java script object notation

//function

/*
void sum(int a, int b){
    System.out.println(a+b);
}

*/

// function switchOn() {
//   console.log("switch pressed");
//   console.log("hold for 5 sec");
//   console.log("music baje");
//   console.log("2 to hat ase");
//   console.log("handshake kore");
//   console.log("nokia");
// }

//DRY - don't repeat yourself
// switchOn();
// switchOn();
// switchOn();
// switchOn();
// switchOn();
// switchOn();

//heavywieight
// const switchOn = function () {
//   console.log("switch pressed");
//   console.log("hold for 5 sec");
//   console.log("music baje");
//   console.log("2 to hat ase");
//   console.log("handshake kore");
//   console.log("nokia");
// };

//lightwieght
const switchOn = () => {
  console.log("switch pressed");
  console.log("hold for 5 sec");
  console.log("music baje");
  console.log("2 to hat ase");
  console.log("handshake kore");
  console.log("nokia");
  return;
};

// using object properties
const kingshuk = {
  username: "kingshuk",
  //   key  : value
  surname: {
    firstSurname: "Sil",
    aftermarraigeSurname: "Das",
  },
};
// console.log(kingshuk.username + " " + kingshuk.surname.firstSurname);

// console.log(3 + 3); //6
// console.log("3" + "3"); //33
// console.log("3" - "3"); //0
// console.log("3" + "3" - "3"); //30

// console.log("3" + 3); //33 / 6
// console.log(3 + "3"); //33

// console.log(3 + Number("3")); //3+3
// console.log(typeof +"3");
// "3" + "3";

//function

// function display() {
//   console.log("displaying");
// }

// let b = funciton(){
//   console.log("displaying");
// }

// function sum(a, b) {
//   // return a + b;
//   console.log(a);
//   console.log(b());
//   // console.log( display())
// }
// sum(4, 5);
// sum("3" + true);

// display();
// sum(4, display);

const sum = (a, b) => {
  console.log(a);
  b();
};

sum(16, () => {
  console.log("displaying");
});

//for all other language
//array is a set of homogenous data.
//array size can not be changed.

// for js
//array can store multiple types.
const arr1 = [
  1,
  "Bidyut",
  true,
  [1, 2, 3, 4],
  { name: "kingshuk", surname: "sil" },
];

//traversing
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((value, index) => {
//   console.log("value " + value);
//   console.log("index " + index);

//   if (typeof value === "object") {
//     console.log(value.name);
//     console.log(value.surname);
//   }
// });
//callback hell

const calculate = (a, b, operation) => {
  return operation(a, b);
};

const addition = calculate(3, 5, function (num1, num2) {
  return num1 + num2;
});

// const newarr = arr.map((value) => {

// });

// console.log(newarr);

// arr.push("kingshuk");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("kingshuk");
// console.log(arr);

const arr = [1, 2, -2, -4, 2, -6, 5, -6, -2, 7];
const newarr = [];

2 == "2"; //true
2 === "2"; //false
arr.forEach((value, index, array) => {
  if (index % 2 === 0) newarr.push(value);
});

// console.log(newarr);

//normal way to concat string
const username3 = "Kingshuk";
const surname3 = "Sil";

let fullname = "My full name is " + username3 + " " + surname3 + ".";
// console.log(fullname);

const addition3 = (a, b) => a + b;
//template literal
fullname = `My full name is ${username3} ${surname3}. And my age is ${
  2023 - 2001
}. And 2+2 is equal to ${addition3(2, 2)}`;
console.log(fullname);

//ternary operator
// const age = 20;
// if (age < 18) {
//   console.log(`You are not an adult`)
//   console.log(`You are not an adult`)
//   console.log(`You are not an adult`)
// }
// else {
//   console.log(`You are an adult`)
// };

// age < 18
//   ? console.log(`You are not an adult`)
//   : console.log(`You are an adult`);


  //* falsy value 
  //* object
  //* rest operator


//falsy value
// 0,'',null,undefined,false

// const divElement = document.getElementsByTagName("div");

// if(divElement){

// }

// let counter;
// const initCounter = () => {
//   counter = 0;
// }
// if(counter){
//   console.log(counter);
// }
// else{
//   console.log(`Please click on the start button`);
// }



 