// Напишите функцию filter(), фильтрующую массив объектов по значению свойства.
// Массив, название свойства и нужное значение должны передаваться в качестве
// аргументов.

let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Пётр", surname: "Петров" },
  { name: "Иван", surname: "Ивановов" },
  { name: "Иван", surname: "Петров" },
];

function filter(object, property, item) {
  let iskArr = [];
  for (let iskProp of object) {
    if (typeof iskProp !== "object") {
      continue;
    } else if (property in iskProp) {
      if (iskProp[property] === item) {
        iskArr.push(iskProp);
      }
    }
  }
  return iskArr;
}
console.log(filter(objects, "name", "Иван"));
