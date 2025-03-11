// Ваша задача — вернуть либо:

// true если количество участников встречи, представляющих любой из трех языков программирования,
//  **максимум в 2 раза превышает количество разработчиков, представляющих любой из оставшихся языков программирования**; или
// false в противном случае.

// Например, дан следующий входной массив:
// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];
// Ваша функция должна возвращать false, так как число разработчиков JavaScript ( 3) в 3 раза превышает число разработчиков Python ( 1). Оно не может превышать более чем в 2 раза, чтобы считаться языково-разнообразным.

// Примечания:
// Строки, представляющие все три языка программирования, всегда будут отформатированы одинаково (например, «JavaScript» всегда будет отформатирован с использованием заглавных букв «J» и «S»).
// Входной массив всегда будет допустимым и отформатированным, как в примере выше.
// Каждый из 3 языков программирования всегда будет представлен.

interface IList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

const list1: IList[] = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

const isLanguageDiverse = (list: IList[]): boolean => {
  const javaScript: number = list.filter(
    (item) => item.language === "JavaScript"
  ).length;
  const python: number = list.filter(
    (item) => item.language === "Python"
  ).length;
  const ruby: number = list.filter((item) => item.language === "Ruby").length;

  const max: number = Math.max(javaScript, python, ruby);
  const min: number = Math.min(javaScript, python, ruby);
  return max <= min * 2;
};

console.log(isLanguageDiverse(list1));
