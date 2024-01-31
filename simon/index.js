/* 
count = 1;
if win then count ++;
if lose count = 1;

save sequence in an array.
take sequence through random btw 0 to 3

if i press red then chekc value 1 

check at every click if it matched the sequence of the array

if false then break
*/

let count = 1;
let gameStatus = "pending";

const buttons = document.querySelectorAll(".buttons");
const className = [
  "bg-red-600",
  "bg-green-600",
  "bg-blue-600",
  "bg-yellow-600",
];
//changing the style on button click(button click effect)
let sequence = [];
function pushIntoSequence() {
  let number = Math.floor(Math.random() * 4 + 1);
  sequence.push(number);
  console.log(sequence);
}

const sleep = (milisecond) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, milisecond);
  });
};

// function authenticate() {
//   return new Promise((resolve) => {
//     console.log("hello");
//     sequence.forEach((value, index) => {
//       //   await  sleep(1000);
//       buttons.forEach((element) => {
//         element.addEventListener("click", () => {
//           // blink(element);
//           let key = element.getAttribute("key");
//           if (Number(key) !== value) {
//             resolve(false);
//           }
//         });
//       });
//     });
//     resolve(true);
//   });
// }

const init = () => {
  document.querySelector("#score").innerHTML = count;
  sequence = [];
  count = 1;
  document.querySelector("#Turn").innerHTML =
    "You lost press any key to play again";
};

function authenticate() {
  sequence.forEach((value) => {
    buttons.forEach((element) => {
      element.addEventListener("click", () => {
        console.log(e);
      });
    });
  });
}

function displaySequence() {
  document.querySelector("#Turn").innerHTML = "Watch the pattern Closely!";
  sequence.forEach((value, index) => {
    //   await  sleep(1000);
    buttons.forEach((element) => {
      let key = element.getAttribute("key");
      if (key === String(value)) {
        setTimeout(() => {
          blink(element);
        }, 1000 * index);
      }
    });
  });
}

//* This function blinks the element
function blink(element) {
  let color = element.getAttribute("color");
  element.classList.replace(`bg-${color}-400`, `bg-${color}-600`);
  //   pushIntoSequence();

  let interval1 = setInterval(() => {
    element.classList.replace(`bg-${color}-600`, `bg-${color}-400`);
    clearInterval(interval1);
  }, 300);
}
document.addEventListener("keypress", async (e) => {
  //   console.log(e);
  if (e.key === "G") {
    init();
    document.querySelector("#score").innerHTML = count;
    pushIntoSequence();
    await sleep(1000);
    displaySequence();
    start();
  }
});
async function start() {
  let i = 0;
  //   let res = await authenticate();
  buttons.forEach((element) => {
    element.addEventListener("click", async (event) => {
      blink(element);
      //   console.log(event);
      let key = element.getAttribute("key");
      //   console.log(key);
      if (Number(key) === sequence[i]) {
        i++;
        console.log(i);
        if (i === sequence.length) {
          i = 0;
          document.querySelector("#score").innerHTML = count;
          count++;
          pushIntoSequence();
          await sleep(1000);
          displaySequence();
          //   document.querySelector("#Turn").innerHTML = "Your Turn";
        }
      } else {
        init();
        // break;
      }
    });
  });
}

// buttons.forEach((element, index) => {
//   element.addEventListener("click", async (event) => {
//     blink(element);
//     authenticate();
//     // let result = check(element);
//     // if (result === false) return;
//   });
// });
// authenticate();
// sequence.forEach((value, index) => {
//   //   await  sleep(1000);
//   buttons.forEach((element) => {
//     element.addEventListener("click", (e) => {
//       // blink(element);
//       console.log(e);
//       let key = element.getAttribute("key");
//       if (Number(key) !== value) {
//         console.log("hello");
//       }
//     });
//   });
// });
