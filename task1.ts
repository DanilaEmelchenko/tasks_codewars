// Возвращает тип суммы двух аргументов

const typeOfSum = (a: any, b: any): any => {
  return typeof (a + b);
};

console.log(typeOfSum("2", 3));
