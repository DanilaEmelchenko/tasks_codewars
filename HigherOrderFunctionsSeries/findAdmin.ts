// Дан следующий входной массив:
// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ];

// напишите функцию, которая при выполнении findAdmin(list1, 'JavaScript')возвращает только разработчиков JavaScript, являющихся администраторами GitHub:
// [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
// ]

// Примечания:
// Первоначальный порядок должен быть сохранен.
// Если на заданном языке нет разработчиков-администраторов GitHub, то возвращается пустой массив [].
// Входной массив всегда будет допустимым и отформатированным, как в примере выше.
// Строки, указывающие, является ли кто-то администратором GitHub, всегда будут отформатированы как 'yes'и 'no'(все в нижнем регистре).
// Строки, представляющие заданный язык, всегда будут отформатированы одинаково (например, 'JavaScript'всегда будут отформатированы с использованием заглавных букв «J» и «S»).

interface IList {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
  githubAdmin: string;
}

const list1: IList[] = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 22,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 49,
    language: "Ruby",
    githubAdmin: "no",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 34,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
    githubAdmin: "no",
  },
];

const findAdmin = (list: IList[], lang: string): boolean | any[] => {
  const res = list.filter(
    (item) => item.language === lang && item.githubAdmin === "yes"
  );

  return res.length ? res : [];
};

console.log(findAdmin(list1, "JavaScript"));
