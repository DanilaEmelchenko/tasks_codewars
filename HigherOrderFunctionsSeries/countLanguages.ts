// Ваша задача — вернуть объект (ассоциативный массив в PHP, таблицу в COBOL, словарь в Python),
//  который включает количество языков программирования, представленных на встрече .

// Например, дан следующий входной массив:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// Ваша функция должна возвращать следующий объект (ассоциативный массив в PHP, таблицу в COBOL):
// { C: 2, JavaScript: 1, Ruby: 1 }

// Примечания:
// Порядок языков в объекте не имеет значения.
// Значение счетчика должно быть допустимым числом.
// Входной массив всегда будет допустимым и отформатированным, как в примере выше.

interface IList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

interface IListResultat {
  C?: number;
  JavaScript?: number;
  Ruby?: number;
}

const list1: IList[] = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

const countLanguages = (list: IList[]): IListResultat => {
  return list.reduce((acc, item) => {
    acc[item.language] = acc[item.language] + 1 || 1;
    return acc;
  }, {});
};

console.log(countLanguages(list1));
