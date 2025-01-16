// Вы, вероятно, знакомы с системой «лайков» на Facebook и других страницах.
// Люди могут «лайкать» посты в блогах, фотографии или другие материалы. Мы хотим создать текст, который будет отображаться рядом с таким материалом.

// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится товар.
// Она должна возвращать текст для отображения, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Примечание: для 4 и более имён число в "and 2 others" просто увеличивается.

const likes = (names: string[]): string => {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Peter"]));
