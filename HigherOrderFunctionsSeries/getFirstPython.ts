// Ваша задача — вернуть одну из следующих строк:
// < firstName here >, < country here > первого разработчика Python, который зарегистрировался; или
// There will be no Python developers если ни один разработчик Python не зарегистрировался.
// Например, дан следующий входной массив:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// Ваша функция должна возвращать Victoria, Puerto Rico.

// Примечания:
// Входной массив всегда будет допустимым и отформатированным, как в примере выше.

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
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

const getFirstPython = (list: IList[]): string => {
  const res = list.find((item) => item.language === "Python");

  return res
    ? `${res.firstName}, ${res.country}`
    : "There will be no Python developers";
};

console.log(getFirstPython(list1));
