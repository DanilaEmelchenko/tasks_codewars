// Дан следующий входной массив:
// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// напишите функцию, которая возвращает средний возраст разработчиков (округленный до ближайшего целого числа). В примере выше ваша функция должна возвращать 50(число).

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
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

const getAverageAge = (list: IList[]): number => {
  const arrAges = list.map((item) => item.age);
  if (arrAges.length === 0) return 0;
  const res = arrAges.reduce((acc, item) => acc + item, 0) / arrAges.length;

  return Math.round(res);
};

console.log(getAverageAge(list1));
