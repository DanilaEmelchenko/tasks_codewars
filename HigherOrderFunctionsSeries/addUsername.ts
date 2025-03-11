// Дан следующий входной массив:
// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];

// напишите функцию, которая добавляет username свойство к каждому объекту во входном массиве:
// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//     username: 'nore2000' }
// ]

// Стоимость имущества username складывается путем объединения:
// firstName в нижнем регистре;
// первая буква lastName в нижнем регистре; и
// год рождения, который для целей этого ката рассчитывается просто путем вычитания ageиз текущего года.
// Пожалуйста, убедитесь, что ваша функция возвращает правильный год рождения независимо от того,
// когда она будет выполнена, например, она также должна работать правильно для встречи, организованной через 10 лет.
// В примере выше предполагается, что функция выполняется в 2020 году.

interface IList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

interface IListResult extends IList {
  username: string;
}

const list1: IList[] = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  },
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  },
];

const addUsername = (list: IList[]): IListResult[] => {
  const firstNameLower = list.map((lower) => lower.firstName.toLowerCase());
  const lastNameLower = list.map((lower) =>
    lower.lastName.charAt(0).toLowerCase()
  );
  const yearOfBirth = list.map((year) => new Date().getFullYear() - year.age);

  return list.map((item, index) => ({
    ...item,
    username: firstNameLower[index] + lastNameLower[index] + yearOfBirth[index],
  }));
};

console.log(addUsername(list1));
