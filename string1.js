let str = "$120 hello im sure you glad to $120 see viaGrA, $10";

// Сделать первый символ заглавным
function ucFirst(str) {
  str = str[0].toUpperCase() + str.slice(1);
  console.log(str);
}

//Проверка на спам
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
    console.log("spam");
  } else {
    console.log(str);
  }
}

//Усечение строки
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    str = str.slice(0, maxLength - 1) + "…";
    console.log(str);
  } else {
    console.log(str);
  }
}

// выделить число
function extractCurrentlyValue(str) {
  let strLength = str.length;
  let dollarPos = -1;
  while ((dollarPos = str.indexOf("$", dollarPos + 1)) != -1) {
    let spaceAfterDollarPos = str.indexOf(" ", dollarPos);
    if (spaceAfterDollarPos != -1) {
      console.log(str.slice(dollarPos + 1, spaceAfterDollarPos));
    } else {
      console.log(str.slice(dollarPos + 1, strLength));
    }
  }
}

ucFirst(str);
checkSpam(str);
truncate(str, 10);
extractCurrentlyValue(str);
