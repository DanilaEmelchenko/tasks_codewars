// ам будет предоставлен массив объектов (хэшей в Ruby), представляющих данные о разработчиках,
//  которые зарегистрировались для участия во встрече по программированию, которую вы организуете впервые.

// Ваша задача — определить количество разработчиков JavaScript из Европы .

// Например, рассмотрим следующий список:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// Ваша функция должна возвращать число 1.
// Если в Европе нет разработчиков JavaScript, то ваша функция должна возвращать 0.

// Примечания:
// Формат строк всегда будет Europeи JavaScript.
// Все данные всегда будут действительными и единообразными, как в примере выше.

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
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

const countDevelopers = (list: IList[]): number => {
  let quantity: number = 0;
  list.filter((item) => {
    if (item.continent === "Europe" && item.language === "JavaScript")
      return quantity++;
  });

  return quantity;
};

console.log(countDevelopers(list1));
