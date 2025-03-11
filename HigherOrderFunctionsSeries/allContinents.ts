// Ваша задача — вернуть:
// true если все следующие континенты/географические зоны будут представлены хотя бы одним разработчиком:
//  «Африка», «Америка», «Азия», «Европа», «Океания».
// false в противном случае.

// Например, дан следующий входной массив:
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];

// Ваша функция должна вернуть результат true, так как есть по крайней мере один разработчик из требуемых 5 географических зон.

interface IList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

interface IContinents {
  Africa?: boolean;
  Americas?: boolean;
  Asia?: boolean;
  Europe?: boolean;
  Oceania?: boolean;
}

const list1: IList[] = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];

const list2 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
];

const allContinents = (list: IList[]): boolean => {
  const mandatoryContinents: string[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  //   const setContinents = new Set(list.map((item) => item.continent));
  //   return mandatoryContinents.every((item) => setContinents.has(item));

  const continents: IContinents = list.reduce((acc, item) => {
    acc[item.continent] = true;
    return acc;
  }, {});

  return mandatoryContinents.every((item) => continents[item]);
};

console.log(allContinents(list1));
console.log(allContinents(list2));
