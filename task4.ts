// Вам будет дана непустая строка. Ваша задача — вернуть средний символ (символы) строки.

// Если длина строки нечётная, верните средний символ.
// Если длина строки чётная, верните два средних символа.
// Примеры:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

const getMiddle = (s: string): string => {
  let position: number;
  let length: number;

  if (s.length % 2 === 1) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }

  return s.substring(position, position + length);
};

console.log(getMiddle("test"));
