// Вам будет предоставлен массив объектов (ассоциативные массивы в PHP, таблицы в COBOL),
//  представляющих данные о разработчиках, которые зарегистрировались для участия в следующей встрече по программированию,
//  которую вы организуете.

// Ваша задача — вернуть массив,
//  в котором каждый объект будет иметь новое свойство «приветствие» со следующим строковым значением:

// Привет, <имя здесь>, что тебе больше всего нравится в <язык здесь>?

// Например, дан следующий входной массив:
// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];

// Ваша функция должна возвращать следующий массив:
// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];

// Примечания:
// Порядок свойств в объектах не имеет значения (за исключением COBOL).
// Входной массив всегда будет допустимым и отформатированным, как в примере выше.

interface IList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

interface IListResult extends IList {
  greeting: string;
}

const list1: IList[] = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

const greetDevelopers = (list: IList[]): IListResult[] => {
  return list.map((item) => ({
    ...item,
    greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`,
  }));
};

console.log(greetDevelopers(list1));
