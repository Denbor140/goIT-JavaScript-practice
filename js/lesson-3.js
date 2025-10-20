// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const arr = ["jazz", "blues"];
// arr.push("rock-n-roll");
// console.log(arr);
// let blueInd = arr.indexOf("blues");
// arr[blueInd] = "classic";
// console.log(arr);

// function logItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1} - ${arr[i]}`);
//   }
// }
// logItems(arr);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userPromt = prompt("Введіть імя").trim();
//   console.log(userPromt);

//   if (array.includes(userPromt)) {
//     alert(`Welcome ${userPromt}`);
//   } else {
//     alert(`User not found`);
//   }
// }

// checkLogin(logins);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   let total = 0;
//   let count = 0;

//   for (const arg of args) {
//     if (typeof arg === "number" && !isNaN(arg)) {
//       total += arg;
//       count++;
//     }
//   }
//   return total / count;
// }

// console.log(caclculateAverage(50, 20, 60, 850));
// console.log(caclculateAverage(1, "hello", 3));
// console.log(caclculateAverage(10, NaN, 20));

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(someArr);

// function foo(array) {
//   const newArr = [];

//   for (let i = 0; i < array.length - 1; i++) {
//     newArr.push(array[i] + array[i + 1]);
//   }
//   return newArr;
// }
// console.log(foo(someArr));

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers) && numbers.length > 0) {
//     return Math.min(...numbers);
//   } else {
//     return `Sory, it is not an array!`;
//   }
// }

// console.log(findSmallestNumber(numbers));
// console.log(findSmallestNumber([]));
// console.log(findSmallestNumber("Hello"));

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// function findLongestWord(string) {
//   console.log(string);

//   const arrStr = string.split(" ");
//   console.log(arrStr);
//   let max = arrStr[0];

//   for (let i = 1; i < arrStr.length; i++) {
//     console.log(arrStr[i]);
//     if (arrStr[i].length > max.length) {
//       max = arrStr[i];
//     }
//   }
//   return max;
// }

// function findLongestWord(string) {
//   return string
//     .split(" ")
//     .reduce((longest, current) =>
//       current.length > longest.length ? current : longest
//     );
// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// console.log(salaries);

// // const keys = Object.keys(salaries);
// // let sum = 0;
// // for (const key of keys) {
// //   sum += salaries[key];
// // }
// const sum = Object.values(salaries).reduce(
//   (total, salaries) => (total += salaries),
// );

// console.log(sum);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     if (!this.exist()) {
//       return `No such propeties`;
//     } else {
//       return this.a + this.b;
//     }
//   },
//   mult() {
//     if (!this.exist()) {
//       return `No such propeties`;
//     } else {
//       return this.a * this.b;
//     }
//   },

//   exist() {
//     //   return this.hasOwnProperty("a") && this.hasOwnProperty("b");
//     return typeof this.a === "number" && typeof this.b === "number";
//   },
// };

// calculator.read(10, 20);
// console.log(calculator.sum());
// console.log(calculator.mult());

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mult());

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let total = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       total += fruit.price * fruit.quantity;
//     }
//   }
//   return total;

//   //   return fruits.reduce(
//   //     (total, fruit) =>
//   //       fruit.name === fruitName ? total + fruit.price * fruit.quantity : total,
//   //     0
//   //   );
// }

// console.log(calcTotalPrice(fruits, "Банан"));
