/* Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список.
В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
Рекомендации к выполнению:
Для проверки наличия в массиве значения можно использовать один из двух методов
(array - переменная, в которой необходимо произвести проверку):
• array.indexOf('значение для проверки') вернёт индекс элемента, если он есть в массиве.
А если значение не будет найдено, то метод вернёт -1.
• array.includes('значение для проверки') вернёт просто true, если элемент найден, false в противном случае. */

let emailArr = [
  `danobez21@gmail.com`,
  `bawer@mail.com`,
  `rambler@rambler.ru`,
  `block@blockchain.eu`,
  `china@emailArr.cn`,
];
let blockArr = [`danobez21@gmail.com`, `backinschool@rumbler.ru`];

function filter(emailArr, blackList) {
  let whiteEmailArr = [];
  for (let email of emailArr) {
    for (let black of blackList) {
      if (black.includes(email)) {
        if (black.length == email.length) {
          console.log(`${email} in blacklist`);
        }
        break;
      } else if (!whiteEmailArr.includes(email)) {
        whiteEmailArr.push(email);
      }
    }
  }
  console.log(whiteEmailArr);
}
filter(emailArr, blockArr);
