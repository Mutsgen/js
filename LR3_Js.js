// Задание 1
/* В переменную password запишите строку с любым произвольным паролем. Проверьте
надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа,
а также есть хотя бы один из символов '-', '_'. Выведите в консоль сообщения «Пароль
надёжный» или «Пароль недостаточно надёжный».*/
let password = prompt("Password");

function passCheck(password) {
  if (password.length > 4 && password.includes("-" || password.includes("_"))) {
    console.log(`${password}, надежный!`);
  } else {
    console.log(`${password}, никак не подходит, не надежен он`);
  }
}
passCheck(password);

/* В переменных name, surname написаны имя и фамилия человека. При этом в строках
беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для
этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся
буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с
помощью console.log. С помощью тернарных операторов и console.log выведите
сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и
фамилии в зависимости от того, были ли исходные строки равны преобразованным. */

let uname = "дАнИЛА";
let surname = "пОПКов";

function nameCheck(name, surname) {
  let checkedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  let checkedSurname =
    surname[0].toUpperCase() + surname.slice(1).toLowerCase();
  if (name === checkedName) {
    console.log("Имя не было преобразованно");
  } else {
    console.log(`Имя было преобразованно из ${name} в ${checkedName}`);
  }
  if (surname === checkedSurname) {
    console.log("Фамилия не было преобразованно");
  } else {
    console.log(
      `Фамилия было преобразованно из ${surname} в ${checkedSurname}`
    );
  }
}
nameCheck(uname, surname);
