// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP)
// , представляющих данные о разработчиках,
//  которые зарегистрировались для участия в следующей встрече по программированию, которую вы организуете.

// Ваша задача — вернуть:
// true если зарегистрировался хотя бы один разработчик Ruby; или
// falseесли не будет разработчиков Ruby.
// Например, дан следующий входной массив:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// Ваша функция должна возвращать true.

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
    firstName: "Emma",
    lastName: "Z.",
    country: "Netherlands",
    continent: "Europe",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "Javascript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
];

const isRubyComing = (list: IList[]): boolean => {
  return list.some((item) => item.language === "Ruby");
};

console.log(isRubyComing(list1));
