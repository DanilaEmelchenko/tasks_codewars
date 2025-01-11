// В этом небольшом задании вам дана строка чисел, разделённых пробелами, и нужно вернуть самое большое и самое маленькое число.

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

const highAndLow = (numbers: string): string => {
  let arr: string[] = numbers.split(" ");

  const arrNumbers: number[] = arr.map((item) => {
    return +item;
  });

  const max: number = arrNumbers.reduce((acc, item) => {
    return Math.max(acc, item);
  });

  const min: number = arrNumbers.reduce((acc, item) => {
    return Math.min(acc, item);
  });

  const result: string = [max, min].join(" ");

  return result;
};

console.log(highAndLow("1 9 3 4 -5"));
