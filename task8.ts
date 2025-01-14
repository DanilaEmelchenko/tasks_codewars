// Напишите программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, вы можете быть уверены, что это ваш друг! В противном случае вы можете быть уверены, что это не...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Строки ввода будут содержать только буквы.
// Примечание: сохраняйте исходный порядок имён в выводе.

const friend = (friends: string[]): string[] => {
  return friends.filter((item) => {
    if (item.length === 4) {
      return item;
    }
  });
};

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friend(["Peter", "Stephen", "Joe"]));
console.log(friend(["Love", "Your", "Face", "1"]));
