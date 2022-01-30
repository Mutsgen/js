//Название JavaScript
function nameOfJS() {
  let answer = prompt("Какое «официальное» название JavaScript?");
  if (answer.toLowerCase == "ecmascript") {
    console.log("Верно");
  } else {
    console.log("Не знаете? ECMAScript!");
  }
}

function numSign() {
  let answer = 0;
  let num = prompt("Введите число");
  if (num % 1 == 0) {
    num = 0 ? (answer = 0) : num > 0 ? (answer = 1) : (answer = -1);
  }
  console.log(answer);
  //   if (num % 1 == 0) {
  //     if (num == 0) {
  //       answer = 0;
  //     } else if (num > 0) {
  //       answer = 1;
  //     } else {
  //       answer = -1;
  //     }
  //   }
}
