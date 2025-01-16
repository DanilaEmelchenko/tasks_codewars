// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку из этих чисел в виде номера телефона.

// Пример
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// Возвращаемый формат должен быть правильным, чтобы выполнить эту задачу.

// Не забудьте про пробел после закрывающих круглых скобок!

const createPhoneNumber = (numbers: number[]): string => {
  const one = numbers.slice(0, 3).join("");
  const two = numbers.slice(3, 6).join("");
  const three = numbers.slice(6, numbers.length).join("");

  return `(${one}) ${two}-${three}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
