// function sum(num1, num2) {
//   return num1 + num2;
// }

// function minus(num1, num2) {
//   return num1 - num2;
// }

// function calculator(num1, num2, operation) {
//   console.log(operation(num1, num2));
// }

// calculator(5, 5, function () {
//   console.log(5 - 5);
// });

// document.addEventListener("")
// const h1 = document.querySelector("#data");

// h1.addEventListener("click", function (e) {
//   console.log(e);
// });

// System.out.println(a);
// data
const h1Arr = document.querySelectorAll("h1");
h1Arr.forEach(function (element) {
  element.addEventListener("click", function (e) {
    this.innerHTML = e.target.id;
    // console.log(e);
  });
});

// for (let i = 0; i < h1Arr.length; i++) {
//   h1Arr[i].addEventListener("click", function () {});
// }
