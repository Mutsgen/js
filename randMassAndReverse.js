/*Задание 1
Напишите генератор массивов длиной count со случайными числами от n до m.
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
Выведите результат с помощью console.log.
Выполните задание, используя несколько видов циклов.*/

let randArr = [];
let count = 10;
let n = 100;
let m = 7;
function pullArrRand(Array, length, n, m) {
  let min = Math.min(n, m);
  let diap = Math.abs(n - m);
  for (let i = 0; i < length; i++) {
    let randNum = Math.round(Math.random() * diap + min);
    Array[i] = randNum;
  }
  console.log(Array);
}

function altVariant(Array, length, n, m) {
  let min = Math.min(n, m);
  let diap = Math.abs(n - m);
  let i = 0;
  while (i < length) {
    let randNum = Math.round(Math.random() * diap + min);
    Array[i] = randNum;
    i++;
  }
  console.log(Array);
}

/*Задание 2
С помощью цикла создать перевёрнутый вариант произвольной строки.
Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».*/

let userString = `Hello world!`;

function reverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}

pullArrRand(randArr, count, n, m);
altVariant(randArr, count, n, m);
reverse(userString);
