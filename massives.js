/*изучить массивы и решить задачу(дан массив состоящий из 5 рандомных чисел (.random), нужно
1) вывести все числа кратные 3ом,
2) найти сумму всех элементов массива,
3) найти кол-во чётных чисел,
4) найти кол-во положительных чисел).*/

function exercises() {
  let arrNum = new Array();
  for (let i = 0; i < 5; i++) {
    arrNum[i] = Math.round(Math.random() * 1000 - 500);
  }
  let sum = 0;
  let countChet = 0;
  let countUint = 0;
  for (let num = 0; num < arrNum.length; num++) {
    if (arrNum[num] % 3 == 0) {
      console.log(`${arrNum[num]} - кратно трем`);
    }
    if (arrNum[num] % 2 == 0) {
      countChet++;
    }
    if (arrNum[num] >= 0) {
      countUint++;
    }
    sum = sum + arrNum[num];
  }
  console.log(`${sum} - сумма всех элементов массива
    ${countChet} - количество четных чисел
    ${countUint} - количество положительных чисел`);
}
exercises();
