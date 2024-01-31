// "use strict";
// const output = [];
// let count = 1;

// function fizzbuzz(){
// output.push(count);
//     count++;
// // console.log(output);
// }

// for(let i = 0;i<30;i++)
//     fizzbuzz();

// for(let i = 0;i<output.length;i++){
//     if (output[i]%3===0 && output[i]%5===0) {
//         alert("fizzbuzz at array element: "+(i+1))
//     }
//     else if (output[i]%3===0) {
//         alert("fizz at array element: "+(i+1));
//     }
//     else if (output[i]%5===0) {
//         alert("buzz at array element: "+(i+1));
//     }
// }

const sleep = (milisecond) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, milisecond);
  });
};

(async () => {
  sleep(1000);
  console.log(1);
  await sleep(1000);
  console.log(2);
  await sleep(1000);
  console.log(3);
})();
