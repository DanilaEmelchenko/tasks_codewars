// Простое задание: дана строка из слов, нужно вернуть длину самого короткого слова (слов).

// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

const findShort = (s: string): number => {
  const result: number[] = s.split(" ").map((item) => item.length);

  return Math.min(...result);
};

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
